import template from './adds.html';
import controller from './adds.controller';
import './adds.scss';

let addsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['Schedule','$state',controller]
};

export default addsComponent;
