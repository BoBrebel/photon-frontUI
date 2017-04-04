import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['Cars','Schedule', controller]
};

export default homeComponent;
