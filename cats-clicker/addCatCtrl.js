/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .controller('addCatCtrl', addCatCtrl);

    function addCatCtrl($scope) {
        var cat = this;
        cat.newCat = {
            name: '',
            url: '',
            image: ''
        };
        cat.addNewCat = addNewCat;
        cat.cancel = cancel;

        function addNewCat() {
            return true;
        }

        function cancel() {
            cat.newCat.name = '';
            cat.newCat.url = '';
            cat.newCat.image = '';
            $scope.addCat.$setPristine();
        }
    }
})();
