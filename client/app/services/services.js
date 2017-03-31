import angular from 'angular';
import Car from './car.service';
import User from './user.service';
import Schedule from './schedule.service';

let serviceModule = angular.module('app.services', [])
  .service('Cars',Car)
  .service('Users',User)
  .service('Schedule',Schedule)

  .name;

export default serviceModule;
/**
 * Created by BoB on 3/9/2017.
 */


