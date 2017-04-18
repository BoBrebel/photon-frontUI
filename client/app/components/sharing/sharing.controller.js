class SharingController {
  constructor(Users,Sharing, $scope, $rootScope, $interval) {
    this.Users = Users;
    this.$interval = $interval;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.name = 'sharing';
    this.availalbe = {};
    this.Sharing = Sharing;
    this.availablelist = {};
    this.cancel = [];
    this.latitude = [];
    this.longitude = [];
    this.distances = [];
    this.unique = false;
    this.$scope.test = 100;


    this.latitude = [36.806575,36.805207,36.793342,36.793342,36.789457];
    this.longitude = [10.184594,10.168172,10.162553,10.162553,10.160197];
    this.Sharing.getAvailable().then((response) => {
      this.availablelist = response.data;
      console.log("LIST :", this.availablelist);
    }, (reject) => {
      console.log('Something went wrong');
    });




     this.latitude_user=0;
     this.longitude_user=0;
    this.$onInit= ()=>{
      this.$interval(()=>{this.Users.getCurrentPosition().then((resolve,reject)=>{
        if(resolve){
          console.log("resolve coords",resolve.coords);
          this.latitude_user=resolve.coords.latitude;
          this.longitude_user=resolve.coords.longitude;
          console.log("latitude_user coords",this.latitude_user);
          console.log("longitude_user coords",this.longitude_user);
        }

        else{

        }
      })},1000)
    };
    console.log("user pos :", this.userpos);
  }

  //methods
  add_Customer(id_schedule,index) {
    this.cancel[index] = true;
    console.log("done");
    this.Sharing.addCustomer(id_schedule);
    console.log("result", this.Sharing);
    this.unique = true;
  }

  switchToOrder(index) {
    this.cancel[index] = false;
  }

  cancelOrder(id_schedule, index) {
    this.unique = false;
    this.cancel[index] = false;
    this.Sharing.deleteCustomerFromSchedule(id_schedule);
  }


  distance(index,lat_user,long_user) {
    this.Sharing.getDistance(this.latitude[index],this.longitude[index],lat_user,long_user).then((response) => {
      this.distances.push(Math.round(parseInt(response.data),1)/1000);
    }, (reject) => {
      console.log('Something went wrong');
    });
  }

}
export default SharingController;
