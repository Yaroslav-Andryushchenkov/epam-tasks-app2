/**
 * Created by Yaroslav_Andryushche on 10/20/2015.
 */
angular.module('commonUI')
    .directive('imageInput', imageInput);

    function imageInput() {
    return {
        restrict: 'E',
        templateUrl: '/cats-clicker/modules/commonUI/imageInputDirective.html',
        scope: {
            url: '=urlModel',
            form: '@parentForm'
        }
    }
}
