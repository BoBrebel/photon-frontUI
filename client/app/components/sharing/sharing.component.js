import template from './sharing.html';
import controller from './sharing.controller';
import './sharing.scss';

let sharingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['Users','Sharing','$scope','$rootScope','$interval',controller]
};

export default sharingComponent;
