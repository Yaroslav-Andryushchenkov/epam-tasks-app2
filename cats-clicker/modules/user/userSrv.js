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
            var currentUser = getCurrentUser();
            if(!currentUser) {
                var anonymous = {
                    name: 'anonymous',
                    password: '',
                    email: '',
                    id: 0
                }
                addUser(anonymous);
                login(anonymous);
            }
        }

        function addUser(user) {
            var key = 'user_' + user.name;
            var localUser = window.localStorage.getItem(key);
            try{
                localUser = JSON.parse(localUser);
                if(!!localUser.name) {
                    saveUser(user);
                    return true;
                }
            }
            catch(e) {
                saveUser(user);
                return true;
            }

            return false;

            function saveUser(user) {
                var key = 'user_' + user.name;
                if (typeof user.id === "undefined") {
                    user.id = new Date().toISOString().replace(/[^\d]/g, '');
                }
                window.localStorage.setItem(key, JSON.stringify(user));
                return true
            }
        }

        function login(user) {
            var key = 'user_' + user.name;
            var localUser = window.localStorage.getItem(key);
            try{
                localUser = JSON.parse(localUser);
                if(!!localUser && localUser.password === user.password){
                    $cookies.put('currentUser', JSON.stringify(localUser),{path:'/cats-clicker'});
                    return true;
                }
            }
            catch(e) {
                return false;
            }

            return false;
        }

        function getCurrentUser() {
            var user = null;
            try{
                user = JSON.parse($cookies.get('currentUser'));
                return user;
            }
            catch(e){
                return null;
            }

        }
    }

})();
