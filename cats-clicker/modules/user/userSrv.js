/**
 * Created by Yaroslav_Andryushche on 10/8/2015.
 */
(function(){
    angular.module('user')
        .service('userSrv', userSrv);

    userSrv.$inject = ['$http', '$cookies'];

    function userSrv($http, $cookies) {
        var us = this;
        us.addUser = addUser;
        us.login = login;
        us.getCurrentUser = getCurrentUser;

        activate();

        function activate(){
            var anonymous = {
                name: 'anonymous',
                password: '',
                email: '',
                id: 0
            }
            addUser(anonymous);
            login(anonymous);
        }

        function addUser(user) {
            var key = 'user_' + user.name;
            var localUser = window.localStorage.getItem(key);
            if(!localUser) {
                user.id = new Date().toISOString().replace(/[^\d]/g, '');
                window.localStorage.setItem(key, user);
                return true
            }
            return false;
        }

        function login(user) {
            var key = 'user_' + user.name;
            var localUser = window.localStorage.getItem(key);

            if(!localUser) {
                return false
            }
            if(localUser.password === user.password){
                $cookies.put('currentUser', localUser);
                return true;
            }
            else {
                return false;
            }

        }

        function getCurrentUser() {
            return $cookies.get('currentUser');
        }
    }

})();
