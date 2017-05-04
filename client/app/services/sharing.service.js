/**
 * Created by HDMI on 3/30/2017.
 */
export default class Sharing {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.schedules = {};
  }

  getAvailable() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/sharing/available',
    });
  }
  getDistance(lat_car,long_car,lat_user,long_user){

      return this.$http({
        method: 'GET',
        url: 'http://localhost:4000/sharing/getDistance/'+lat_car+'/'+long_car+'/'+lat_user+'/'+long_user,
      });
  }

  addCustomer(id_schedule) {
    return this.$http({
      method: 'PUT',
      url: 'http://localhost:4000/sharing/addCustomer/' + id_schedule + '/'+localStorage.getItem('CurrentUser'),

    });
  }

  deleteCustomerFromSchedule(id_schedule) {
    return this.$http({
      method: 'DELETE',
      url: 'http://localhost:4000/sharing/delete/' + id_schedule + '/'+localStorage.getItem('CurrentUser'),

    });
  }
  numberNotification() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/sharing/notify/'+localStorage.getItem('CurrentUser'),
    });
  }
  numberplace() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/sharing/place/'+localStorage.getItem('CurrentUser'),
    });
  }
}


