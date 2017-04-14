class HomeController {
  constructor(Cars,Schedule) {
    this.name = 'home';
    this.ack=Cars.getack();
    this.order = false;
    this.Schedule = Schedule;

  }

  getSchedules(){
    this.Schedule.getAll();
  }

  logout(){
    localStorage.clear();
  }
}

export default HomeController;
