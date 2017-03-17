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

        youTubeFactory
            .getData()
            .then(function(data) {

            })
            .catch(function(error) {
                console.log(error);
            });
    }
})();
