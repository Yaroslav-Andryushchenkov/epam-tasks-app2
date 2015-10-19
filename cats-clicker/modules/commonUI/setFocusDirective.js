/**
 * Created by Yaroslav_Andryushche on 10/19/2015.
 */
angular.module('commonUI')
    .directive('setFocus', setFocus);

    function setFocus() {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            elem.focus();
        }
    }
}
