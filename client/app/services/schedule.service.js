/**
 * Created by HDMI on 3/30/2017.
 */
export default class Schedule {
  constructor() {
    'ngInject';
  }

  addSchedule(schedule,$http){
    return $http({
      method: 'POST',
      url: 'http://localhost:4000/username/schedule',
      data : {
        'schedule':schedule
      }
    });
  }

  getAll(){
    console.log('getting all schedules')
  }

};


