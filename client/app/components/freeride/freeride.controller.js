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
/* Returns number of free ride available for the connected uer*/
  checkForRide(){
    this.Freeride.checkFreeRide().then((response) => {
      console.log("number of Free ride", response.data);
      this.numberOfFreeRides= response.data;
    }, (reject) => {
      console.log('Something went wrong');
    });
  }

  /*Subtracts a ride after the user orders a free ride */
  substractRides(){
  this.Freeride.substractRide().then((response)=> {
    console.log("Subtracted a free ride",response.data);
    this.$state.go('home',{});
  },(reject)=> {
    console.log('Something went wrong');
  });
  }
/*Registers the new invited user with the refer link*/
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
    this.Freeride.registerinvites(this.newUser).then((response)=>{
      console.log(' User Added :',response.data);
      this.$state.go('login',{});
    },(reject)=>{
    });
  };
}

export default FreerideController;
