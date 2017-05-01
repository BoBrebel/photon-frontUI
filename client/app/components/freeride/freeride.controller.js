class FreerideController {
  constructor(Freeride) {
    this.name = 'freeride';
    this.Freeride = Freeride;
    this.freeRide = {};
    this.logged = "http://localhost:4000/users/invite/"+localStorage.getItem('CurrentUser');
  }

  checkForRide(){
    this.Freeride.checkFreeRide().then((response) => {
      this.freeRide = response.data;
      console.log("Free ride", this.freeRide);

    }, (reject) => {
      console.log('Something went wrong');
    });
  }
}

export default FreerideController;
