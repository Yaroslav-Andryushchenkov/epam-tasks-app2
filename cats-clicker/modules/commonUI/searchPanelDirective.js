/**
 * Created by Yaroslav_Andryushche on 10/21/2015.
 */
angular.module('commonUI')
    .directive('searchPanel', spinner);

    function spinner() {
    return {
        restrict: 'E',
        templateUrl: '/cats-clicker/modules/commonUI/searchPanelDirective.html',
        scope: {
            search: '&search',
            filter: '=filter',
            sorting: '=sorting'
        }
    }
}
