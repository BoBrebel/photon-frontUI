import angular from 'angular';
import Car from './car.service';
import User from './user.service';

let serviceModule = angular.module('app.services', [])
  .service('Cars',Car)
  .service('Users',User)

  .name;

export default serviceModule;
/**
 * Created by BoB on 3/9/2017.
 */
