import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scheduleComponent from './schedule.component';
import scheduleaddComponent from './addschedule.component';

let scheduleModule = angular.module('schedule', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('schedule', {
        url: '/schedule',
        component: 'schedule'
      })

      .state('addschedule', {
        url: '/addschedule',
        component: 'scheduleadd',
      });
  })
.component('schedule', scheduleComponent)
  .component('scheduleadd',scheduleaddComponent)

.name;

export default scheduleModule;
