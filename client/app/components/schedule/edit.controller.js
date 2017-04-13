class editScheduleController {
  constructor(Schedule) {
    this.name = 'schedule';
    this.Schedule = Schedule;
    this.Schedule.getScheduleToEdit().then(response => {
      this.scheduleToEdit = response.data;
      console.log("after set:", response.data);
    });

  }

  /*To send the put request of the edited schedule*/
  /*update(){
    this.Schedule.updateSchedule(this.scheduleToEdit._id,this.scheduleToEdit).then((response)=>{
      console.log('Schedule Updated' ,this.scheduleToEdit);
      console.log("response obj has: ", response);
    },(reject)=>{

    });
  }*/

}
export default editScheduleController;
