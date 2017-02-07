'use strict';

angular.module('myApp.Account', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/account', {
    templateUrl: 'Account/Account.html',
    controller: 'accountCtrl'
  });
}])

.controller('accountCtrl',function ($scope) {
    $scope.title='Account Details';
    $scope.account={
        firstname:'Bob',
        lastname:'Skafandri',
        accountPlan:'ScheduleMe',
        email:'bob@mailbox.com',
        mobile:'50027995',
        paymentdetails:{
            cardnumber:5545454545,
            expires:"12/05/2018",
            name:'Bob'
        }
    }
    $scope.isobject = function (element) {
        return(angular.isObject(element));
    }
})
.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
})