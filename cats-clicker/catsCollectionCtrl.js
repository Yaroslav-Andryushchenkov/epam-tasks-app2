/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .controller('catsCollectionCtrl', catsCollectionCtrl);

    catsCollectionCtrl.$inject = ['catsSrv'];

    function catsCollectionCtrl(catsSrv) {
        var cats = this;

        cats.selected = 0;
        cats.sorting = 'asc';
        cats.nameFilter = '';
        cats.searchObject = {name:''};
        cats.items = catsSrv.getCats();
        cats.selectCat = selectCat;
        cats.addVote = addVote;
        cats.removeVote = removeVote;
        cats.search = search;


        function search() {
            console.log(cats.sorting);
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
        }

    }
})();
