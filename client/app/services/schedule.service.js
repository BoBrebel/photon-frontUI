/**
 * Created by HDMI on 3/30/2017.
 */
export default class Schedule {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.schedules = {};
  }
  /*for now the user_id is static*/
  addSchedule(schedule) {
    return this.$http({
      method: 'POST',
      url: 'http://localhost:4000/schedules/user/58c00b4f44822044ec960706/schedule?to='+
      schedule.to+'&from='+schedule.from+'&date='+schedule.date
    });
  }
  removeSchedule(id) {
    return this.$http({
      method: 'DELETE',
      url: 'http://localhost:4000/schedules/'+id
    });
  }
  /*Returns the schedules obj after promise exec*/
  getScheduleList(){
    return this.schedules;
  }
  getAll() {
    return  this.$http({
        method:'GET',
        //url:'http://localhost:4000/users/user/58c00b4f44822044ec960706/schedule'
      url:'http://localhost:4000/schedules/user/58c00b4f44822044ec960706'
      })
}



}


