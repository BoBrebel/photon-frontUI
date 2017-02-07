'use strict';

angular.module('myApp.Schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'Schedule/Schedule.html',
    controller: 'scheduleCtrl'
  });
}])

.controller('scheduleCtrl', function($scope) {
    $scope.title='Schedule'

});