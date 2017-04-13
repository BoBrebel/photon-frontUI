import template from './authentification.html';
import controller from './authentification.controller';
import './authentification.scss';

let authentificationComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Authentification','$state' ,controller]
};

export default authentificationComponent;
