/**
 * Created by Yaroslav_Andryushche on 10/11/2015.
 */
(function(){
    angular.module('user')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'userSrv'];

    function loginCtrl($scope, userSrv) {
        var user = this;
        user.credential = {
            name: '',
            password: ''
        };
        user.notification = '';
        user.login = login;

        function login() {

            if( userSrv.login(user.credential)) {
                user.notification = 'You successfully logged in';
            }
            else {
                user.notification = 'Wrong credential';
            }
            clearForm();
        }

        function clearForm() {
            user.credential.name =  '';
            user.credential.password =  '';
            $scope.loginUser.$setPristine();
        }
    }


})();
