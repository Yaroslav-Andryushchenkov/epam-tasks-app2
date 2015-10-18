/**
 * Created by Администратор on 14.10.15.
 */
(function(){
    angular.module('catsClicker')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config( $stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('addCat',{
                templateUrl: '/cats-clicker/sections/addCat.html',
                controller: 'addCatCtrl',
                controllerAs: 'cat'
            })
            .state('addUser',{
                templateUrl: '/cats-clicker/sections/addUser.html',
                controller: 'addUserCtrl',
                controllerAs: 'user'
            })
            .state('login',{
                templateUrl: '/cats-clicker/sections/login.html',
                controller: 'loginCtrl',
                controllerAs: 'user'
            })
            .state('list',{
                template: ''
            })
            .state('about',{
                templateUrl: '/cats-clicker/sections/about.html'
            });;
    }
})();