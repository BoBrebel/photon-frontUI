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
      url: 'http://localhost:4000/users/checkinvite/'+localStorage.getItem('CurrentUser')
    });
  }




}

