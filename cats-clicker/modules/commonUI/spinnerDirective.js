/**
 * Created by Yaroslav_Andryushche on 10/21/2015.
 */
angular.module('commonUI')
    .directive('spinner', spinner);

    function spinner() {
    return {
        restrict: 'E',
        templateUrl: '/cats-clicker/modules/commonUI/spinnerDirective.html',
        scope: {
            upVote: '&up',
            downVote: '&down',
            currentVotes: '@current'
        }
    }
}
