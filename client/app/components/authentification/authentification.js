import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authentificationComponent from './authentification.component';

let authentificationModule = angular.module('authentification', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('register', {
        url: '/register',
        component: 'authentification'
      })
      .state('login', {
        url: '/login',
        component: 'authentification'
      });
  })

.component('authentification', authentificationComponent)

.name;

export default authentificationModule;
