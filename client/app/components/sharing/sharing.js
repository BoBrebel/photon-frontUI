import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sharingComponent from './sharing.component';

let sharingModule = angular.module('sharing', [
  uiRouter
])

.component('sharing', sharingComponent)

.name;

export default sharingModule;
