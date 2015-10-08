/**
 * Created by Yaroslav_Andryushche on 10/8/2015.
 */
(function(){
    angular.module('catsClicker')
        .service('userSrv', userSrv);

    function userSrv($http) {
        this.addUser = addUser;

        function addUser(usdr) {
            // there must be saving to local storage loginc
        }
    }

})();
