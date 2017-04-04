/**
 * Created by HDMI on 4/4/2017.
 */
import template from './addschedule.html';
import controller from './schedule.controller';
import './schedule.scss';

let scheduleaddComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['Schedule', controller]
};

export default scheduleaddComponent;
