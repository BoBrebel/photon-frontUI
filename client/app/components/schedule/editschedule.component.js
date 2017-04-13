/**
 * Created by HDMI on 4/4/2017.
 */
import template from './editschedule.html';
import controller from './edit.controller';
import './schedule.scss';

let editscheduleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['Schedule', controller]
};

export default editscheduleComponent;

