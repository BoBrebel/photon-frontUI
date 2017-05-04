import angular from 'angular';
import uiRouter from 'angular-ui-router';
import freerideComponent from './freeride.component';
import registerinvitedComponent from './registerinvited.component';

let freerideModule = angular.module('freeride', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('freeride', {
        url: '/freeride',
        component: 'freeride'
      })
    .state('registerinvited', {
      url: '/users/invite/:id',
      component: 'registerinvited'
    });
  })
.component('freeride', freerideComponent)
  .component('registerinvited',registerinvitedComponent)

.name;

export default freerideModule;
