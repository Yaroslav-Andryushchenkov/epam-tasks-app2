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
        cats.canVote = canVote;
        cats.removeVote = removeVote;
        cats.search = search;
        cats.canDelete = canDelete;
        cats.deleteCat = deleteCat;


        catsSrv.getCats().then(function(items){
            cats.items = items;
        });

        function search() {
            cats.searchObject.name = cats.nameFilter;
        }

        function selectCat(id){
            var index = findCatIndexById(id);
            cats.selected = index;
            cats.items[index].tick = true;
        }

        function addVote(id){
            var index = findCatIndexById(id);
            cats.items[index].votes++;
            userSrv.trackVote(userSrv.getCurrentUser().name, id);
        }


        function canVote(cat){
            var currentUser = userSrv.getCurrentUser();
            return userSrv.canVote(currentUser.name, cat);
        }

        function removeVote(id){
            var index = findCatIndexById(id);
            if (cats.items[index].votes > 0){
                cats.items[index].votes--;
            }

        }

        function findCatIndexById(id) {
            for (i=0; i<cats.items.length; i++) {
                if(cats.items[i].id === id){
                    return i;
                }
            }

            return null;
        }

        function canDelete(id){
            var index = findCatIndexById(id);
            if(index == null) {
                return false;
            }

            if(!cats.items[index].hasOwnProperty('userId')) {
                cats.items[index].userId = 0;
            }

            var currentUser = userSrv.getCurrentUser();
            if(cats.items[index].userId == currentUser.id) {
                return true;
            }

            return false;
        }



        function deleteCat(id) {
            catsSrv.deleteCat(id).then(function (data) {
                for(i=0; i<data.length; i++)
                {
                    var index = findCatIndexById(data[i].id);
                    if(index !== null) {
                        delete cats.items[index];
                    }
                }
            });
        }


    }
})();
