/**
 * Created by Администратор on 14.10.15.
 */
(function(){
    angular.module('catsClicker')
        .config(config);

    config.$inject = [ '$routeProvider'];

    function config( $routeProvider) {
        //$httpProvider.useApplyAsync(true);
        $routeProvider
            .when('/addCat',{
            templateUrl: '/cats-clicker/sections/addCat.html',
            controller: 'addCatCtrl'
        })
            .when('/addUser',{
            templateUrl: '/cats-clicker/sections/addUser.html',
            controller: 'addUserCtrl'
        })
            .when('/login',{
                templateUrl: '/cats-clicker/sections/login.html',
                controller: 'loginCtrl'
            });
    }
})();