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
    $scope.schedule={
        1:"monday",
        2:"tuesday",
        3:"wednesday",
        4:"thursday",
        5:"friday",
        6:"saturday",
        7:"sunday",
        8:"monday",
        9:"tuesday",
        10:"wednesday",
        11:"thursday",
        12:"friday",
        13:"saturday",
        14:"sunday",
        15:"monday",
        16:"tuesday",
        17:"wednesday",
        18:"thursday",
        19:"friday",
        20:"saturday",
        21:"sunday",
        22:"monday",
        23:"tuesday",
        24:"wednesday",
        25:"thursday",
        26:"friday",
        27:"saturday",
        28:"sunday"



    }

})
    .filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
                input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    })