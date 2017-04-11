import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sharingComponent from './sharing.component';

let sharingModule = angular.module('sharing', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";


    $stateProvider
      .state('sharing', {
        url: '/sharing',
        component: 'sharing'
      });
  })
.component('sharing', sharingComponent)

.name;

export default sharingModule;
