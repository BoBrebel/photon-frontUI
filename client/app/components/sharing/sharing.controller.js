class SharingController {
  constructor(Sharing,$scope,$http,$rootScope,$location,$state) {
    this.$scope=$scope;
    this.$state=$state;
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.name = 'sharing';
    this.availalbe = {};
    this.Sharing = Sharing;
    this.availablelist = {};
    this.cancel=[];
    this.Sharing.getAvailable().then((response) => {
      this.availablelist = response.data;
      console.log("LIST :", this.availablelist);
    }, (reject) => {
      console.log('Something went wrong');
    })
  }

  //methods
  add_Customer(id_schedule,index) {
    this.cancel[index]=true;
    console.log("done");
    this.Sharing.addCustomer(id_schedule);
    console.log("result",this.Sharing);
  }
  switchToOrder(index){
    this.cancel[index]=false;
  }
  cancelOrder(id_schedule,index)
  {
    this.cancel[index]=false;
    this.Sharing.deleteCustomerFromSchedule(id_schedule);
  }

}
export default SharingController;
