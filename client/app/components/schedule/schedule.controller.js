class ScheduleController {
  constructor(Schedule,$scope,$http,$rootScope,$location,$state) {
    this.name = 'schedule';
    this.$scope=$scope;
    this.$state=$state;
    this.$location = $location;
    this.$rootScope = $rootScope;
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
    console.log("OBJ ID",id);
    this.Schedule.getOneSchedule(id).then((response)=>{
    this.scheduleToEdit = response.data;
     //this.$state.go('editschedule',{myKey:this.scheduleToEdit});
   //this.$location.url('/editschedule.html').search({param: id});
    console.log("this schedultoedit in edit",this.scheduleToEdit);
    var obj = ({
      from:"Omrane",
      to:"Manar",
      date:"2017-04-11T23:00:00.000Z"
    });
    this.Schedule.updateSchedule(id,obj).then((response)=>{
        console.log('done');
      },(reject)=>{

      });

    },(reject)=>{

    });
  }
  /*To send the put request of the edited schedule*/
  update(){
    this.Schedule.updateSchedule(this.scheduleToEdit._id,this.scheduleToEdit).then((response)=>{
      console.log('Schedule Updated' ,this.scheduleToEdit);
      console.log("response obj has: ", response);
    },(reject)=>{

    });
  }
  getAck() {
    console.log(this.Schedule.getAll());
  }

}
export default ScheduleController;
