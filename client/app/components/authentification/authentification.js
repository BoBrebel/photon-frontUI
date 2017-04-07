import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authentificationComponent from './authentification.component';
import loginComponent from './login.component';

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
        component: 'login'
      });
  })

.component('authentification', authentificationComponent)
.component('login', loginComponent)

.name;

export default authentificationModule;
