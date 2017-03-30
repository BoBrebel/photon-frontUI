/**
 * Created by BoB on 3/9/2017.
 */
export default class Car {
  constructor($interval) {
    'ngInject';
    this.$interval = $interval;
    this.marker1={
      lat: 36.8496494,
      lng: 10.1533103,
      message: " 1St Car",
      draggable: true
    }
    this.marker2={
      lat: 36.847016,
      lng: 10.1514716,
      message: " 2nd Car",
      draggable: true,

    }
  }
  getack(){
    return 'this service works';
  }
  getCarsPosition(){

      this.marker1.lat+=0.001;
      this.marker1.lng+=0.00001;
      this.marker2.lat+=0.00001;
      this.marker2.lng+=0.0001;
        return {'car1':this.marker1,'car2':this.marker2};
    }

  sendOriginAndDestination(org,dest,$http){
    return $http({
      method: 'POST',
      url: 'http://localhost:4000/cars/directions',
      data : {
        'user':org,
        'destination':dest
      }
    });
  }
  }

