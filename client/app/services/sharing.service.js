/**
 * Created by HDMI on 3/30/2017.
 */
export default class Sharing {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.schedules = {};
  }

  getAvailable(){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/sharing/available',
    });
  }

  addCustomer(id_schedule){
    return this.$http({
      method: 'PUT',
      url: 'http://localhost:4000/sharing/addCustomer/'+id_schedule+'/58c00d046ad53f1e3c325fe7',

    });
  }


}


