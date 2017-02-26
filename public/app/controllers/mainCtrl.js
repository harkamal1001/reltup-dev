angular.module('mainCtrl', [])

    .controller('mainController', [ '$scope' ,function($scope,$rootScope, $location, Auth) {
//----------- used variables -----------------------------     
        $scope.LoginForm;
        $scope.validUsername ='';
        $scope.validPassword ='';
        $scope.username = '\\w+@illinois.edu';
        $scope.user = 'Hi user';
        
//----------- validation Error -----------------------------
        $scope.pass_err = 'Password required';
        $scope.pass_err_length_max = 'Password is too long.';
        $scope.pass_err_length_min = 'Username is too short.';
        $scope.email_err = 'Email must be like user@illinois.edu';
        
//----------- Login form #starts -----------------------------
        $scope.submitLoginForm = function() {
            $scope.processing = true;

            // clear the error
            $scope.error = '';
            //check to make sure the form is completely valid
            if ($scope.LoginForm.$valid) {
                $scope.processing = true;

                // clear the error
                $scope.error = '';

                Auth.login($scope.LoginForm.validPassword, $scope.LoginForm.validPassword)
                    .success(function(data) {
                        $scope.processing = false;			

                        // if a user successfully logs in, redirect to users page
                        if (data.success)			
                            $location.path('/users');
                        else 
                            $scope.error = data.message;

                    });
     
            }
        }; // Login form #ends

    }]); // controller #ends