class ScheduleController {
  constructor(Schedule,$scope,$http) {
    this.name = 'schedule';
    this.$scope=$scope;
    this.$http = $http;
    this.Schedule = Schedule;
    this.schedulelist = {};
    this.newSchedule = {};
    this.scheduleToEdit={};

    this.Schedule.getAll().then((response)=>{
      this.schedulelist = response.data;
     console.log("LIST",this.schedulelist);
    },(reject)=>{
      console.log('Something went wrong');
    })
  }

 formSubmit(schedule) {
    this.newSchedule = {
      to: schedule.to,
      from: schedule.from,
      date:schedule.date,
    };
    console.log("current new schedule state: ", this.newSchedule);
    this.Schedule.addSchedule(this.newSchedule).then((response)=>{
      console.log(' Schedule Added :',response.data);
    },(reject)=>{
    });
  }
  remove(id){
    console.log(id);
    this.Schedule.removeSchedule(id).then((response)=>{
      console.log('Schedule deleted !', response.data);
      this.Schedule.getAll().then((response)=>{
        this.schedulelist = response.data;
        console.log("LIST",this.schedulelist);
      },(reject)=>{
        console.log('Something went wrong');
      })
    },(reject)=>{

    })
  }
  /*To get the schedule clicked*/
  edit(id){
    console.log(id);
    this.Schedule.getOneSchedule(id).then((response)=>{
    this.scheduleToEdit = response.data;
    console.log(this.scheduleToEdit);

    },(reject)=>{

    })
  }
  /*To send the put request of the edited schedule*/
  update(){
    console.log(this.scheduleToEdit._id);
    this.Schedule.updateSchedule(this.scheduleToEdit._id,this.scheduleToEdit);
  }
  getAck() {
    console.log(this.Schedule.getAll());
  }

}
export default ScheduleController;
