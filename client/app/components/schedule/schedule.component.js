import template from './schedule.html';
import controller from './schedule.controller';
import './schedule.scss';

let scheduleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['Schedule','$state','$scope', controller]
};

export default scheduleComponent;
