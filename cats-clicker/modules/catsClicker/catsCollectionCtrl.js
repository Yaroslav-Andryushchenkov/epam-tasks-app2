/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .controller('catsCollectionCtrl', catsCollectionCtrl);

    catsCollectionCtrl.$inject = ['catsSrv', 'userSrv'];

    function catsCollectionCtrl(catsSrv, userSrv) {
        var cats = this;

        cats.selected = 0;
        cats.sorting = 'asc';
        cats.nameFilter = '';
        cats.searchObject = {name:''};
        cats.items = [];
        cats.selectCat = selectCat;
        cats.addVote = addVote;
        cats.removeVote = removeVote;
        cats.search = search;
        cats.canDelete = canDelete;

        catsSrv.getCats().then(function(items){
            cats.items = items;
        });

        function search() {
            cats.searchObject.name = cats.nameFilter;
        }

        function selectCat(name){
            var index = findCatIndexByName(name);
            cats.selected = index;
            cats.items[index].tick = true;
        }

        function addVote(name){
            var index = findCatIndexByName(name);
            cats.items[index].votes++;
        }

        function removeVote(name){
            var index = findCatIndexByName(name);
            if (cats.items[index].votes > 0){
                cats.items[index].votes--;
            }

        }

        function findCatIndexByName(name) {
            for (i=0; i<cats.items.length; i++) {
                if(cats.items[i].name === name){
                    return i;
                }
            }

            return null;
        }

        function canDelete(name){
            var index = findCatIndexByName(name);
            if(index == null) {
                return false;
            }

            if(!cats.items[index].hasOwnProperty('userId')) {
                cats.items[index].userId = 0;
            }

            var currentUser = userSrv.getCurrentUser();
            if(cats.items[index].userId === currentUser.id) {
                return true;
            }

            return false;
        }

    }
})();
