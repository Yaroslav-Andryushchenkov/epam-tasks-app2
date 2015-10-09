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
        user.addNewUser = addNewUser;
        user.cancel = clearForm;

        function addNewUser() {
            if(user.newUser.password != user.newUser.confirmation) {
                $scope.addUser.confirmation.$setValidity('pwmatch', false);
            }
            userSrv.addUser(user.newUser);
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
