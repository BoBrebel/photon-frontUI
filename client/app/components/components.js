import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Mapbox from './mapbox/mapbox';
import Schedule from './schedule/schedule';
import Authentification from './authentification/authentification';
import Sharing from './sharing/sharing';
import Profile from './profile/profile';
import Feedback from './feedback/feedback';
import Adds from './adds/adds';
import Freerides from './freeride/freeride';
import Plans from './plans/plans'


let componentModule = angular.module('app.components', [
  Home,
  About,
  Schedule,
  Authentification,
  Mapbox,
  Sharing,
  Profile,
  Feedback,
  Adds,
  Freerides,
  Plans
])

.name;

export default componentModule;
