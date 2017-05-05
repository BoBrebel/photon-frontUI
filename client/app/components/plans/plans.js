import angular from 'angular';
import uiRouter from 'angular-ui-router';
import plansComponent from './plans.component';

let plansModule = angular.module('plans', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('plans', {
      url: '/plans',
      component: 'plans'
    });
})
.component('plans', plansComponent)

.name;

export default plansModule;
