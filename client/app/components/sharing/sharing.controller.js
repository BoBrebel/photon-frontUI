class SharingController {
  constructor(Sharing) {
    this.name = 'sharing';
    this.availalbe = {};
    this.Sharing = Sharing;
    this.availablelist = {};

    this.Sharing.getAvailable().then((response) => {
      this.availablelist = response.data;
      console.log("LIST :", this.availablelist);
    }, (reject) => {
      console.log('Something went wrong');
    })
  }

  //methods
  add_Customer(id_schedule) {
    console.log("done");
    this.Sharing.addCustomer(id_schedule);
    console.log("result",this.Sharing);
  }
}
export default SharingController;
