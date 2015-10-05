/**
 * Created by Yaroslav_Andryushche on 10/5/2015.
 */
(function(){
    angular.module('catsClicker')
        .service('catsSrv', catsSrv);

    function catsSrv() {
        this.getCats = getCats;
    }

    function getCats(){
        return  [
            {
                name: 'Johnotan',
                counter: 0,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfi5hUoRagKs2KjeDC5Zi_EGadAXeQ71YTiE6cqqtLN6p0lxosAg',
            },
            {
                name: 'Ilsa',
                counter: 0,
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIn0tIbv4f5KNnxBeOdgHUxi53u8qGIwPZ8zhew9VmpcOqsL6b',
            },
            {
                name: 'Tommy',
                counter: 0,
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEb0rGk4uod5DQuMu0CjlrjUqnp-LlGIRE1TVQu8HlnVWDyQtzbA',
            },
            {
                name: 'Tiger',
                counter: 0,
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQD8IWVrEw68NSpOj-9pwFA9LIO-3WXNfIXbG8oF6JwlgBhi-d',
            },
            {
                name: 'Idiot',
                counter: 0,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVxim3d71tGA8gPYejl3H43myMcnRpVeH2AK1zolwlgwtYdoN',
            },
        ]
    };
})();
