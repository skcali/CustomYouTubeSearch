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
                    maxResults: 4,
                    order: "relevance",
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
