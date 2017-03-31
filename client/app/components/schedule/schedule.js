import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scheduleComponent from './schedule.component';

let scheduleModule = angular.module('schedule', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('schedule', {
        url: '/schedule',
        component: 'schedule'
      });
  })
.component('schedule', scheduleComponent)

.name;

export default scheduleModule;
