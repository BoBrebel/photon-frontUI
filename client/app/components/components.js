import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Mapbox from './mapbox/mapbox';
import Schedule from './schedule/schedule';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Schedule,
  Mapbox
])

.name;

export default componentModule;
