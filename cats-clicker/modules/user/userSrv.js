/**
 * Created by Yaroslav_Andryushche on 10/8/2015.
 */
(function(){
    angular.module('user')
        .service('userSrv', userSrv);

    function userSrv($http) {
        this.addUser = addUser;
        this.login = login;

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
            if(localUser.password = user.password){
                return true;
            }
            else {
                return false;
            }

        }
    }

})();
