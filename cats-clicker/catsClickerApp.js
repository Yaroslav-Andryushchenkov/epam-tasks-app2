/**
 * Created by Yaroslav_Andryushche on 10/05/2015.
 */
(function() {
    angular.module('commonUI',[]);
    angular.module('user', ['commonUI','ngCookies']);
    angular.module('catsClicker', ['ui.router','user']);
})();