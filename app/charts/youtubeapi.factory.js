(function() {
    'use strict';

    angular
        .module('app')
        .factory('youTubeFactory', youTubeFactory);

    youTubeFactory.$inject = ['$http', 'youTubeApiKey'];

    /* @ngInject */
    function youTubeFactory($http, youTubeApiKey) {
        var service = {
            getData: getData
        };

        return service;

        function getData(data) {
            var url = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=' + youTubeApiKey + '&part=snippet,contentDetails,statistics,status';

            return $http
                .get(url)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
