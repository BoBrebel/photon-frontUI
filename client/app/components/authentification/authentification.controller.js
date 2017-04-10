class AuthentificationController {
  constructor(Authentification,$window) {
    this.name = 'authentification';
    this.Authentification = Authentification;
    this.newUser={};
    this.loggedUser={};
    this.$window = $window;

  }

  formSubmit(user) {
    this.newUser = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      adress: user.adress,
      type: user.type
    };
    console.log("current new user state: ", this.newUser);
    this.Authentification.register(this.newUser).then((response)=>{
      console.log(' User Added :',response.data);
    },(reject)=>{
    });
  };



  login(logged){
    var token="";
    this.loggedUser = {
      email:logged.email,
      password : logged.password
    };
    console.log("trying to login : ", this.loggedUser);
    this.Authentification.login(this.loggedUser).then((response)=>{
      console.log(' User Added and data response :',response.data);
      console.log(' token:',response.data.token);
      token = response.data.token;
      this.$window.localStorage['jwtToken'] = token;
    },(reject)=>{
    });
  }
}

export default AuthentificationController;
