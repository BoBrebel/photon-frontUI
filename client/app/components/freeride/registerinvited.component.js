import template from './registerinvited.html';
import controller from './freeride.controller';
import './freeride.scss';

let registerinvitedComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Freeride','$state',controller]
};

export default registerinvitedComponent;
