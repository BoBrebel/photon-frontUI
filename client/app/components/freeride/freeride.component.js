import template from './freeride.html';
import controller from './freeride.controller';
import './freeride.scss';

let freerideComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Freeride','$state','Authentification','$stateParams',controller]
};

export default freerideComponent;
