angular.module('mainCtrl', [])

.controller('mainController', [ '$scope' ,function($scope) {
	var vm = this;	
	vm.message = 'this is my message!';
    
    
    vm.username = '\\w+@illinois.edu';

    $scope.user = 'Hi user';
}]);