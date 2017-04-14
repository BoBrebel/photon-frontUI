class ScheduleController {
  constructor(Schedule,$state) {
    this.name = 'schedule';

    this.$state=$state;

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
      this.$state.go('schedule', {});
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
    console.log("OBJ ID edit clicked ",id);
    this.Schedule.setScheduleToEdit(this.Schedule.getOneSchedule(id));
  }

  getAck() {
    console.log(this.Schedule.getAll());
  }

}
export default ScheduleController;
