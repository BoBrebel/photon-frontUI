class ScheduleController {
  constructor(Schedule) {
    this.name = 'schedule';
    this.Schedule = Schedule;
    this.schedulelist = {};
    this.Schedule.getAll().then((response)=>{
      this.schedulelist = response.data;
     console.log("LIST",this.schedulelist);
    },(reject)=>{

    })
  }

  getAck() {
    console.log(this.Schedule.getAll());
  }


}
export default ScheduleController;
