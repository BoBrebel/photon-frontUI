import template from './plans.html';
import controller from './plans.controller';
import './plans.scss';

let plansComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$http', controller]
};

export default plansComponent;
