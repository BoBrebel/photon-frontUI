import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Mapbox from './mapbox/mapbox';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Mapbox
])

.name;

export default componentModule;
