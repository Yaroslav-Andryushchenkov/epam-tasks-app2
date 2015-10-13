/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .controller('addCatCtrl', addCatCtrl);

    addCatCtrl.$inject = ['$scope', 'catsSrv'];

    function addCatCtrl($scope, catsSrv) {
        var cat = this;
        cat.newCat = {
            name: '',
            url: '',
            image: ''
        };
        cat.notification = '';
        cat.addNewCat = addNewCat;
        cat.cancel = clearForm;

        function addNewCat() {
            catsSrv.addCat(cat.newCat).then(function(){cat.notification = 'Cat has been added';clearForm();});
        }

        function clearForm() {
            cat.newCat.name = '';
            cat.newCat.url = '';
            cat.newCat.image = '';
            $scope.addCat.$setPristine();
        }
    }


})();
