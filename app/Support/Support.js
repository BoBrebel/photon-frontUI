'use strict';

angular.module('myApp.Support', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/support', {
    templateUrl: 'Support/Support.html',
    controller: 'supportCtrl'
  });
}])

.controller('supportCtrl', function($scope) {
    $scope.title='Support'

});