import template from './login.html';
import controller from './authentification.controller';
import './authentification.scss';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller : ['Authentification','$state', controller]
};

export default loginComponent;
