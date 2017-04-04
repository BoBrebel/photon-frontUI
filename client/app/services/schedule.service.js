/**
 * Created by HDMI on 3/30/2017.
 */
export default class Schedule {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.schedules = {};
  }

  addSchedule(schedule, $http) {
    return $http({
      method: 'POST',
      url: 'http://localhost:4000/schedules/user/58c00b4f44822044ec960706/schedule?to=Tozeur&from=Marsa&date=12-12-2012',
      data: {
        'schedule': schedule
      }
    });
  }
  /*Returns the schedules obj after promise exec*/
  getScheduleList(){
    return this.schedules;
  }

  getAll() {
    return  this.$http({
        method:'GET',
        url:'http://localhost:4000/users/user/58c00b4f44822044ec960706/schedule'
      })
}



}


