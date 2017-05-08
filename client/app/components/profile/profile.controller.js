class ProfileController {
  constructor(Users,Profile) {
    this.Profile = Profile;
    this.name = 'profile';
    this.currUser={};
    this.Users = Users;
    this.switch = false;

    this.Profile.getUser().then((response) => {
      this.currUser = response.data;
      console.log(currUser);
    }, (reject) => {
      console.log('Something went wrong');
    });
  }
  changeView()
  {
    if(this.switch==true)
    this.switch=false;
    else if( this.switch==false)
      this.switch=true;
  }
  updateCustomer()
  {
    this.Profile.updateUser(this.currUser);

   //console.log(this.currUser.name);
  }
}
export default ProfileController;
