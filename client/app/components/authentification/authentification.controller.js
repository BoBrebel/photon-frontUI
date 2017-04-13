class AuthentificationController {

  constructor(Authentification,$state) {
    this.name = 'authentification';
    this.Authentification = Authentification;
    this.newUser={};
    this.loggedUser={};
    this.$state = $state;
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
    var msg ="";
    this.loggedUser = {
      email:logged.email,
      password : logged.password
    };
    console.log("trying to login : ", this.loggedUser);
    this.Authentification.login(this.loggedUser).then((response)=>{
      console.log(' User Loged in and data response :',response.data);
      console.log(' token:',response.data.token);
      console.log('User retrieved is : ', response.data);
      token = response.data.token;
      localStorage.setItem('jwtToken',token);
      localStorage.setItem('CurrentUser', response.data.user);
      this.$state.go('home', {});
    },(reject)=>{
      msg = "Please Verify your Credentials";
    });
  }

  logout(){
    localStorage.clear();
  }
}

export default AuthentificationController;
