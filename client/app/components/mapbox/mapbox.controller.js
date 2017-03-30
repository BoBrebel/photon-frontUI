class MapboxController {
  constructor(Users,Cars,$interval,leafletMarkerEvents,$rootScope,$http) {
    this.name = 'mapbox';
    this.Users = Users;
    this.Cars = Cars;
    this.$interval=$interval;
    this.$rootScope=$rootScope;
    this.leafletMarkerEvents=leafletMarkerEvents;
    this.carcoords= {};
    this.$http = $http;
    this.paths = {}
    this.userpos={};
    this.destpos={};
    this.center= {
        lat: 51.505,
        lng: -0.09,
        zoom: 12
    };
    this.startposition = [ 36.8496494,
      10.1533103];
    this.endposition = [36.8432358,
      10.1489338];
    this.markers= {}
    angular.extend(this, {
      berlin: {
        lat: 52.52,
        lng: 13.40,
        zoom: 14
      },
      layers: {
        baselayers: {
          googleTerrain: {
            name: 'Google Terrain',
            layerType: 'TERRAIN',
            type: 'google'
          },
          googleHybrid: {
            name: 'Google Hybrid',
            layerType: 'HYBRID',
            type: 'google'
          },
          googleRoadmap: {
            name: 'Google Streets',
            layerType: 'ROADMAP',
            type: 'google'
          }
        }
      },
      paths:this.paths,
      defaults: {
        scrollWheelZoom: false
      } ,
      events:{
        markers:{
          enable:this.leafletMarkerEvents.getAvailableEvents(),
        }
      }

    });
    this.events=this.leafletMarkerEvents.getAvailableEvents();
    this.$onInit= ()=>{
      this.$interval(()=>{this.Users.getCurrentPosition().then((resolve,reject)=>{
        if(resolve){
          this.center.lat=resolve.coords.latitude;
          this.center.lng=resolve.coords.longitude;
          this.markers['usermarker']={
            lat: this.center.lat,
            lng: this.center.lng,
            message: "You are here",
            draggable: true
          }
          this.userpos={
            lat:this.center.lat,
            lng:this.center.lng};
        }
        else{
          console.log(reject)
        }
      })},1000)
    }
    $rootScope.$on("leafletDirectiveMap.click",(event,args)=>{
      let leafEvent = args.leafletEvent;

      this.markers['dest']={
        lat: leafEvent.latlng.lat,
        lng: leafEvent.latlng.lng,
        message: "My Added Marker"
      };
      this.destpos={
        lat:leafEvent.latlng.lat,
        lng:leafEvent.latlng.lng
      }
    })
  }

  getCarPosition(){
    this.$interval(()=>{
      this.markers['carmarker1']=this.Cars.getCarsPosition().car1;
      this.markers['carmarker2']=this.Cars.getCarsPosition().car2;

    },2000)

  }
  orderCommute(){
    console.log(this.userpos,this.destpos)
    this.Cars.sendOriginAndDestination(this.userpos,this.destpos,this.$http).then((resolve,reject)=>{
      if(resolve){
        console.log('Commute Sent',resolve.data.Path.geometry.coordinates);
        resolve.data.Path.geometry.coordinates.map((data)=>{
          console.log(data);
        })

        // this.paths = {
        //   type:"polyline",
        //   latlngs:resolve.data.Path.geometry.coordinates
        // }
      }
      else{
        console.log(reject)
      }
    })
  }







  }



export default MapboxController;
