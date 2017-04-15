import template from './feedback.html';
import controller from './feedback.controller';
import './feedback.scss';

let feedbackComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Feedback','$state', controller]
};

export default feedbackComponent;
