import angular from 'angular';
import Car from './car.service';
import User from './user.service';
import Schedule from './schedule.service';
import Authentification from './auth.service';
import Sharing from './sharing.service';
import Profile from './profile.service';
import Feedback from './feedback.service';
import Freeride from './freeride.service';


let serviceModule = angular.module('app.services', [])
  .service('Cars',Car)
  .service('Users',User)
  .service('Schedule',Schedule)
  .service('Authentification', Authentification)
  .service('Sharing', Sharing)
  .service('Profile', Profile)
  .service('Feedback', Feedback)
  .service('Freeride',Freeride)

  .name;

export default serviceModule;
/**
 * Created by BoB on 3/9/2017.
 */


