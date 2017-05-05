
export default class Profile {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getUser() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:4000/users/'+localStorage.getItem('CurrentUser'),
    });
  }
  updateUser(user) {
    return this.$http({
      method: 'PUT',
      url: 'http://localhost:4000/users/update/'+localStorage.getItem('CurrentUser')+'/'+user.name+'/'+user.email+'/'+user.adress,
    });
  }

}
