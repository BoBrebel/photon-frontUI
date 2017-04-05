class ScheduleController {
  constructor(Schedule,$scope,$http) {
    this.name = 'schedule';
    this.$scope=$scope;
    this.$http = $http;
    this.Schedule = Schedule;
    this.schedulelist = {};
    this.$scope.newSchedule = {};

    this.Schedule.getAll().then((response)=>{
      this.schedulelist = response.data;
     console.log("LIST",this.schedulelist);
    },(reject)=>{

    })
  }

  formSubmit(date,from,to){
    this.$scope.newSchedule = {
      to: to,
      from: from,
      date:date,
    };
    console.log(this.$scope.newSchedule);
    this.Schedule.addSchedule(this.$scope.newSchedule, this.$http).then((response)=>{
      console.log(' Schedule Added :',response.data);
    },(reject)=>{

    });
  }

  /*formSubmit(){
    this.Schedule.addSchedule().then((resposne)=>{
      console.log(' Schedule Added :', resposne.data);
    },(reject)=>{

    })
  }*/

  getAck() {
    console.log(this.Schedule.getAll());
  }


}
export default ScheduleController;
