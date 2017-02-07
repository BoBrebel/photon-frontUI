'use strict';

angular.module('myApp.Rides', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rides', {
    templateUrl: 'Rides/Rides.html',
    controller: 'ridesCtrl'
  });
}])

.controller('ridesCtrl', function($scope) {
    $scope.title='Rides'

});