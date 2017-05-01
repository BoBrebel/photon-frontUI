import angular from 'angular';
import uiRouter from 'angular-ui-router';
import freerideComponent from './freeride.component';

let freerideModule = angular.module('freeride', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('freeride', {
        url: '/freeride',
        component: 'freeride'
      });
  })
.component('freeride', freerideComponent)

.name;

export default freerideModule;
