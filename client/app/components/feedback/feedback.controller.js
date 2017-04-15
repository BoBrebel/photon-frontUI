class FeedbackController {
  constructor(Feedback,$state) {
    this.name = 'feedback';
    this.$state = $state;
    this.Feedback = Feedback;
    this.newFeed = {};
  }
  formSubmit(feed) {
    this.newFeed = {
      text: feed.text,
      category: feed.category,
      date: Date.now()
    };
    console.log("current new feed state: ", this.newFeed);
    this.Feedback.addFeed(this.newFeed).then((response)=>{
      console.log(' Feedback Added :',response.data);
      this.$state.go('home', {});
    },(reject)=>{
    });
  }
}

export default FeedbackController;
