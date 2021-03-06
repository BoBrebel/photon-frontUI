import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';
import '../../node_modules/material-design-lite/material.min.js';
import './directives/angular-leaflet-directive.min';
import './directives/calendar';



angular.module('app', [
    uiRouter,
    Common,
    Components,
    Services,
    'leaflet-directive',
    'ui.calendar'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);

