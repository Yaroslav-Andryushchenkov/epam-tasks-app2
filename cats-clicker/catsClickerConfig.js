/**
 * Created by Администратор on 14.10.15.
 */
(function(){
    angular.module('catsClicker')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config( $routeProvider) {
        $routeProvider
            .when('/addCat',{
                templateUrl: '/cats-clicker/sections/addCat.html',
                controller: 'addCatCtrl',
                controllerAs: 'cat'
            })
            .when('/addUser',{
                templateUrl: '/cats-clicker/sections/addUser.html',
                controller: 'addUserCtrl',
                controllerAs: 'user'
            })
            .when('/login',{
            templateUrl: '/cats-clicker/sections/login.html',
            controller: 'loginCtrl',
            controllerAs: 'user'
            })
            .when('/about',{
                templateUrl: '/cats-clicker/sections/about.html'
            });;
    }
})();