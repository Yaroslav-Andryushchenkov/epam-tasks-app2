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
                elem.on('keydown', onKeyUp);
                function onKeyUp(e) {
                    if (e.which == 10 || e.which == 13) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        elem[0].elements[attrs.enterKeySubmit].click();
                    }
                }
            }
        }
    }
}
