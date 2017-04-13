/**
 * Created by HDMI on 3/30/2017.
 */
export default class Authentification {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.schedules = {};
  }

  register(user){
    return this.$http({
      method: 'POST',
      url: 'http://localhost:4000/users/register',
      data:user
    });
  }

  login(logged){
    return this.$http({
      method: 'POST',
      url: 'http://localhost:4000/users/login',
      data:logged
    });
  }
  schedule(){
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/schedules',
      headers: {
        'Authoriziton' : localStorage.getItem('jwtToken')
      }
    });
  }



}


