/**
 * Created by HDMI on 3/30/2017.
 */
export default class Freeride {
  constructor($http) {
    'ngInject';
    this.$http = $http;

  }

  checkFreeRide() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/users/numberinvite/'+localStorage.getItem('CurrentUser')
    });
  }
  substractRide(){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/users/substract/'+localStorage.getItem('CurrentUser')
    });
  }
  registerinvites(user){
    return this.$http({
      method: 'POST',
      url: 'http://localhost:4000/users/invite/'+localStorage.getItem('CurrentUser'),
      data:user
    });
  }



}


