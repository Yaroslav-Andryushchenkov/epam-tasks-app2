/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .controller('catsCollectionCtrl', catsCollectionCtrl);

    catsCollectionCtrl.$inject = ['catsSrv'];

    function catsCollectionCtrl(catsSrv) {
        var cats = this;

        cats.items = catsSrv.getCats();
        cats.selectCat = selectCat;
        cats.selected = 0;

        function selectCat(name){
            for (i=0; i<cats.items.length; i++) {
                if(cats.items[i].name === name){
                    cats.items[i].counter++;
                    cats.selected = i;
                }
            }

        }
    }
})();
