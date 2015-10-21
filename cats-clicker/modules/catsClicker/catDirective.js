/**
 * Created by Yaroslav_Andryushche on 10/21/2015.
 */
angular.module('catsClicker')
    .directive('cat', cat);

    function cat() {
    return {
        restrict: 'E',
        templateUrl: '/cats-clicker/modules/catsClicker/catDirective.html',
        scope: {
            cat: '=cat',
            catsList: '=catsList',
            delete: '@delete',
            tick: '@tick',
            spinner: '@spinner'
        }
    }
}
