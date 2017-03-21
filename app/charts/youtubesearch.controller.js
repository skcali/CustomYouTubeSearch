(function() {
    'use strict';

    angular
        .module('app')
        .controller('YouTubeSearchController', YouTubeSearchController);

    YouTubeSearchController.$inject = ['youtubeFactory'];

    /* @ngInject */
    function YouTubeSearchController(youtubeFactory) {
        var vm = this;

        // Declare empty variables
        vm.ytData = {};
        vm.newPlaylist = [];

        vm.searchOptions = [
            ['Date', 'date'],
            ['Rating', 'rating'],
            ['Relevance', 'relevance'],
            ['Title', 'title'],
            ['View Count', 'viewCount']
        ];

        // Click function to add to empty playlist
        vm.addToPlaylist = function() {
            vm.newPlaylist.push(vm.playlistInput);
            vm.playlistInput = '';
        }

        // Click function to grab data from playlist
        vm.playlistSearch = function() {
            youtubeFactory
                .getVideosFromSearchByParams({
                    q: vm.newPlaylist.join('|'),
                    part: "snippet",
                    maxResults: 10,
                    order: vm.searchCondition,
                    key: 'AIzaSyA3MMCi47ciNhnauXvtAMeZrU5TNNxZCSI'
                })
                .then(function(data) {
                    // Need to message data so grab multiple videos
                    vm.ytData = data;
                    console.log(vm.ytData)
                }).catch(function(error) {
                    console.log(error);
                });
        }
    }
})();
