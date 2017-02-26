angular.module('mainCtrl', [])

.controller('mainController', [ '$scope' ,function($scope) {
	var vm = this;	
	vm.message = 'this is my message!';
    
    $scope.LoginForm;
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
    
    //validation Error
    $scope.pass_err = 'password required';
    $scope.pass_err_length_max = 'Password is too long.';
    $scope.pass_err_length_min = 'Username is too short.';
    $scope.email_err = 'Email must be like user@illinois.edu';
}]);