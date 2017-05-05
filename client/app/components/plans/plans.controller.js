class PlansController {

  constructor($http) {

    this.plans = {};
    this.selected_plan = {};
    this.loading = true;
    $http.get('http://localhost:4000/plans').then(this.setPlans.bind(this))
    this.name = 'plans';
    this.stripe = Stripe('pk_test_RkPgjnmCAoXIVbJhDzbuw0cX');
    this.elements = this.stripe.elements();
    this.style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    this.card = this.elements.create('card', {style: this.style});
    this.card.mount('#card-element');
    this.form = document.getElementById('payment-form');

    this.card.addEventListener('change', function(event) {
      let displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    this.form.addEventListener('submit', this.handleSubmit.bind(this));


  }

  handleSubmit(event){
    event.preventDefault();
    this.stripe.createToken(this.card).then(function(result) {
      if (result.error) {
        // Inform the user if there was an error
        let errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server
        console.log(result.token);
        let dialog = document.querySelector('dialog');
        dialog.close();
        // stripeTokenHandler(result.token);
      }
    });
  }

  setPlans(plans){
    this.plans = plans.data;
    console.log(this.plans);
  }

  randomColor(){
    const colors = ["E82B0C", "BB0C77", "D80DFF"];
    return colors[Math.floor(Math.random() *2)];
  }

  openDialog(plan){
    let dialog = document.querySelector('dialog');
    dialog.showModal();
    this.selected_plan = plan;

  }
  closeDialog(){
    let dialog = document.querySelector('dialog');
    dialog.close();
    console.log(this.selected_plan);
  }

}

export default PlansController;
