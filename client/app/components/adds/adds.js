import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addsComponent from './adds.component';

let addsModule = angular.module('adds', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('adds', {
        url: '/adds',
        component: 'adds'
      })
  })
.component('adds', addsComponent)

.name;

export default addsModule;
