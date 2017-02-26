angular.module('mainCtrl', [])

    .controller('mainController',['$scope', function($scope) {
      $scope.username = '\w+@illinois.edu';
    }]);
