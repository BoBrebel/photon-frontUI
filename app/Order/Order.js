'use strict';

angular.module('myApp.Order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'Order/Order.html',
    controller: 'orderCtrl'
  });
}])

.controller('orderCtrl', function($scope) {
    $scope.title='Order'

});