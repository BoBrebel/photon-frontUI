class FreerideController {
  constructor(Freeride) {
    this.name = 'freeride';
    this.Freeride = Freeride;
    this.freeRide = {};
    this.logged = "http://localhost:4000/users/invite/"+localStorage.getItem('CurrentUser');
  }

  checkForRide(){
    var test = {
      "msg": "No Free Rides"
    };
    this.Freeride.checkFreeRide().then((response) => {
      this.freeRide = response.data;
      console.log("Free ride", this.freeRide);
      console.log("test", test);
      /* need to check if the freeRide obj has a user, or has no free rides msg*/
      /*if it has a user, we must either add money to his account or offer him a free ride ? */
      /* if it has no free ride msg, display : You don't have free rides yet*/

    }, (reject) => {
      console.log('Something went wrong');
    });
  }

}

export default FreerideController;
