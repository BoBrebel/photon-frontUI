import template from './profile.html';
import controller from './profile.controller';
import './profile.scss';

let profileComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['Users','Profile',controller]
};

export default profileComponent;
