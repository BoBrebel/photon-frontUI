class HomeController {
  constructor(Cars) {
    this.name = 'home';
    this.ack=Cars.getack();
    this.order = false;

  }
}

export default HomeController;
