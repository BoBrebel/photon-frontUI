import angular from 'angular';
import uiRouter from 'angular-ui-router';
import feedbackComponent from './feedback.component';

let feedbackModule = angular.module('feedback', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        component: 'feedback'
      });
  })
.component('feedback', feedbackComponent)

.name;

export default feedbackModule;
