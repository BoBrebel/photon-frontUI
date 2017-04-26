class ChatController {
  constructor($scope,Messages) {
    this.name = 'chat';
    this.$scope = $scope;
    this.Messages = Messages;
    // Sent Indicator
    $scope.status = "";

    // Keep an Array of Messages
    $scope.messages = [];

    $scope.me = {name: sillyname()};

    // Set User Data
    Messages.user($scope.me);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Get Received Messages and Add it to Messages Array.
    // This will automatically update the view.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var chatmessages = document.querySelector(".chat-messages");

    Messages.receive(function(msg) {

      $scope.messages.push(msg);

      setTimeout(function() {
        chatmessages.scrollTop = chatmessages.scrollHeight;
      }, 10);

    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Send Messages
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $scope.send = function() {

      Messages.send({data: $scope.textbox});

      $scope.status = "sending";
      $scope.textbox = "";

      setTimeout(function() {
        $scope.status = ""
      }, 1200 );

    };
  }

}

export default ChatController;
