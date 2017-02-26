angular.module('mainCtrl', [])

.controller('mainController', [ '$scope' ,function($scope) {
	var vm = this;	
	vm.message = 'this is my message!';
    
    $scope.validUsername ='';
    $scope.validPassword ='';
    $scope.username = '\\w+@illinois.edu';

    $scope.user = 'Hi user';
    
    $scope.submitLoginForm = function() {
            // check to make sure the form is completely valid
            if ($scope.LoginForm.$valid) {
                alert('our form is amazing');
            }
    };
}]);