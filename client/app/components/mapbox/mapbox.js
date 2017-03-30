import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapboxComponent from './mapbox.component';

let mapboxModule = angular.module('mapbox', [
  uiRouter
])

.component('mapbox', mapboxComponent)

.name;

export default mapboxModule;
