/**
 * Created by Yaroslav_Andryushche on 10/9/2015.
 */
angular.module('catsClicker')
    .directive('pwCheck', pwCheck);

    function pwCheck() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}
