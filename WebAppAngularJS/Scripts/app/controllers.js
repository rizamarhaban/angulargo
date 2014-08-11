// Root Scope Controller
webAppRoot
    .controller('root',
    ['$scope', '$rootScope', '$route', '$routeParams', '$location', function ($scope, $rootScope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeViewPath = $location.path();
            $rootScope.pageTitle = $route.current.title;
        });
    }]);

// Related Page Controllers
webAppRoot
    .controller('HomeController', ['$scope', function ($scope) { }]);

webAppRoot
    .controller('AboutController', ['$scope', function ($scope) { }]);

webAppRoot
    .controller('ContactController', ['$scope', function ($scope) { }]);

webAppRoot
    .controller('ExampleController', ['$scope', '$http', function ($scope, $http) {

        $scope.getWeather = function () {

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city)
                .success(function (data) {

                    // this callback will be called asynchronously
                    // when the response is available

                    $scope.weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png';
                    $scope.clouds = data.weather[0]['description'];
                    $scope.celcius = parseFloat(data.main.temp - 273.15).toFixed(0) + '°C';
                    $scope.humidity = data.main.humidity + '%';

                })
                .error(function (data) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

        };

    }]);


