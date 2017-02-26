angular.module('mainCtrl', [])

.controller('mainController', [ '$scope' ,function($scope) {
	var vm = this;	
	vm.message = 'this is my message!';
    
    $scope.validUsername ='';
    $scope.username = '\\w+@illinois.edu';

    $scope.user = 'Hi user';
}]);