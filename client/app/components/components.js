import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Mapbox from './mapbox/mapbox';
import Schedule from './schedule/schedule';
import Authentification from './authentification/authentification';
import Sharing from './sharing/sharing';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Schedule,
  Authentification,
  Mapbox,
  Sharing
])

.name;

export default componentModule;
