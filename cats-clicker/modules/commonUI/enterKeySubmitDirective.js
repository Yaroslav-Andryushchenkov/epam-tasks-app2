/**
 * Created by Yaroslav_Andryushche on 10/19/2015.
 */
angular.module('commonUI')
    .directive('enterKeySubmit', enterKeySubmit);

    function enterKeySubmit() {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            if(attrs.role == 'form') {
                elem.on('keyup', onKeyUp);
                function onKeyUp(e) {
                    if (e.which == 10 || e.which == 13) {
                        //ctrl.$setSubmitted();
                       // ctrl.$submit = $parse(attrs.ngSubmit);
                        elem[0].elements[attrs.enterKeySubmit].click();
                    }
                }
            }
        }
    }
}
