import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Mapbox from './mapbox/mapbox';
import Schedule from './schedule/schedule';
import Authentification from './authentification/authentification';
import Sharing from './sharing/sharing';
import Feedback from './feedback/feedback';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Schedule,
  Authentification,
  Mapbox,
  Sharing,
  Feedback
])

.name;

export default componentModule;
