/**
 * Created by HDMI on 4/4/2017.
 */
import template from './sharing.html';
import controller from './sharing.controller';
import './sharing.scss';

let sharingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['Sharing',controller]
};

export default sharingComponent;
