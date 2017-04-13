import angular from 'angular';
import Car from './car.service';
import User from './user.service';
import Schedule from './schedule.service';
import Authentification from './auth.service';
import Sharing from './sharing.service';

let serviceModule = angular.module('app.services', [])
  .service('Cars',Car)
  .service('Users',User)
  .service('Schedule',Schedule)
  .service('Authentification', Authentification)
  .service('Sharing', Sharing)

  .name;

export default serviceModule;
/**
 * Created by BoB on 3/9/2017.
 */


