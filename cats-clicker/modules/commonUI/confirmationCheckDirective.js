/**
 * Created by Yaroslav_Andryushche on 10/9/2015.
 */
angular.module('commonUI')
    .directive('confirmationCheck', confirmationCheck);

    function confirmationCheck() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            var source = $('#' + attrs.confirmationCheck);
            elem.on('keyup', check);
            source.on('keyup', check);

            function check() {
                scope.$apply(function () {
                    if ( elem.val() != source.val()){
                        ctrl.$setValidity('mismatch', false);
                    }
                    else {
                        ctrl.$setValidity('mismatch', true);
                    }
                });
            }

        }
    }
}
