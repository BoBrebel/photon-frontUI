import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chatComponent from './chat.component';

let chatModule = angular.module('chatt', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('chatt', {
        url: '/chatt',
        component: 'chatt'
      });
  })
.component('chatt', chatComponent)

.name;

export default chatModule;
