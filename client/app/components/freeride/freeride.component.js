import template from './freeride.html';
import controller from './freeride.controller';
import './freeride.scss';

let freerideComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Freeride','$state',controller]
};

export default freerideComponent;
