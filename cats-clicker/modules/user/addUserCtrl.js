/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('user')
        .controller('addUserCtrl', addUserCtrl);

    addUserCtrl.$inject = ['$scope', 'userSrv'];

    function addUserCtrl($scope, userSrv) {
        var user = this;
        user.newUser = {
            name: '',
            email: '',
            password: '',
            confirmation: ''
        };
        user.notification = '';
        user.addNewUser = addNewUser;
        user.cancel = clearForm;

        function addNewUser() {
            if( userSrv.addUser(user.newUser)) {
                user.notification = 'User successfully added';
            }
            else {
                user.notification = 'User with the same name already exists';
            }
        }

        function clearForm() {
            user.newUser.name =  '';
            user.newUser.email = '';
            user.newUser.password =  '';
            user.newUser.confirmation =  '';
            $scope.addUser.$setPristine();
        }
    }


})();
