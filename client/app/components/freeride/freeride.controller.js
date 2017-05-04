class FreerideController {
  constructor(Freeride,$state,Authentification,$stateParams) {
    this.name = 'freeride';
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.Freeride = Freeride;
    this.Authentification = Authentification;
    this.numberOfFreeRides={};
    this.freeRide = {};
    this.newUser={};
    this.logged = "http://localhost:3000/users/invite/"+localStorage.getItem('CurrentUser');
  }

  checkForRide(){

    this.Freeride.checkFreeRide().then((response) => {
      console.log("number of Free ride", response.data);
      this.numberOfFreeRides= response.data;
      /* need to check if the freeRide obj has a user, or has no free rides msg*/
      /*if it has a user, we must either add money to his account or offer him a free ride ? */
      /* if it has no free ride msg, display : You don't have free rides yet*/

    }, (reject) => {
      console.log('Something went wrong');
    });
  }
  substractRides(){
  this.Freeride.substractRide().then((response)=> {
    console.log("Subtracted a free ride",response.data);
    this.$state.go('home',{});
  },(reject)=> {
    console.log('Something went wrong');
  });
  }

  formSubmit(user) {
    this.newUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      adress: user.adress,
      type: user.type,
      invited : this.$state.params.id
    };

    console.log("current new user state: ", this.newUser);
    this.Freeride.registerinvites(this.newUser).then((response)=>{
      console.log(' User Added :',response.data);
      this.$state.go('login',{});
    },(reject)=>{
    });
  };

}

export default FreerideController;
