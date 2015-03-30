angular.module('pingService', [])

    .factory('ping', ['$http', function($http) {

        // Pings a URL or IP using HTTP GET request
        return {
            ping: function(URL, callback) {

                var responseTime = 0;
                var start = (new Date()).getTime();

                $http.get(URL + '?rnd=' + (new Date().getTime()))
                    .success(function() {
                        responseTime = (new Date().getTime()) - start;
                        callback(Math.round(responseTime / 10) / 100);
                    })
                    .error(function() {
                        callback(responseTime);
                    })
            }
        }
    }]);
