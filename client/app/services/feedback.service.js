/**
 * Created by HDMI on 3/30/2017.
 */
export default class Feedback {
  constructor($http) {
    'ngInject';
    this.$http = $http;

  }

  addFeed(feed) {
    return this.$http({
      method: 'POST',
      url: 'http://localhost:4000/feedbacks/'+localStorage.getItem('CurrentUser'),
      data : feed
    });
  }




}


