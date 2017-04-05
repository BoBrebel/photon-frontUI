import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scheduleComponent from './schedule.component';
import scheduleaddComponent from './addschedule.component';
import editscheduleComponent from './editschedule.component';

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
      })
      .state('editschedule', {
        url: '/editschedule',
        component: 'editschedule'
      });
  })
.component('schedule', scheduleComponent)
  .component('scheduleadd',scheduleaddComponent)
  .component('editschedule',editscheduleComponent)
.name;

export default scheduleModule;
