/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .service('catsSrv', catsSrv);

    catsSrv.$inject = ['$http', 'userSrv'];

    function catsSrv($http, userSrv) {
        this.getCats = getCats;
        this.addCat = addCat;
        this.deleteCat = deleteCat;

        function addCat(cat) {
            var postData = "";
            var conjunction = "";

            var currentUser = userSrv.getCurrentUser();
            cat.userId = !!currentUser ? currentUser.id : 0;

            for (field in cat) {
                postData += conjunction + field + '=' + encodeURIComponent(cat[field]);
                if (conjunction === '')
                    conjunction = "&";

            }

            return $http.post('/cats-clicker-api', postData).then(function(data){
                return data.data;
            });
        }


        function getCats(){
            return $http.get('/cats-clicker-api').then(function(data){
                var cats = [];
                for (i=0; i< data.data.length; i++) {
                    cats[i] = data.data[i];
                    cats[i].tick = false;
                    cats[i].votes = 0;
                }
                return cats;
            });

        };

        function deleteCat(id) {
            return $http.delete('/cats-clicker-api?id=' + id).then(function(data){
                return data.data;
            });
        }
    }

})();
