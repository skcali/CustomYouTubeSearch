(function() {
    'use strict';

    angular
        .module('app')
        .controller('YouTubeSearchController', YouTubeSearchController);

    YouTubeSearchController.$inject = ['youTubeFactory'];

    /* @ngInject */
    function YouTubeSearchController(youTubeFactory) {
        var vm = this;
        vm.check = '';
        vm.vidSearch = function () {
          var request = gabi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIcomponent(vm.vidInput).replace(/%20g/, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
          });
          request.execute(function(response) {
            console.log(response);
          });
        }
        youTubeFactory
            .getData()
            .then(function(data) {

              })
            .catch(function(error) {
                console.log(error);
            });
    }
})();
