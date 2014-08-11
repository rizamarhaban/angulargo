// Main configuration

var webAppRoot = angular.module('myApp', ['ngRoute', 'ngResource']);

webAppRoot
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'main/home', controller: 'HomeController', title: 'Home' })
            .when('/example', { templateUrl: 'main/example', controller: 'ExampleController', title: 'Example' })
            .when('/about', { templateUrl: 'main/about', controller: 'AboutController', title: 'About' })
            .when('/contact', { templateUrl: 'main/contact', controller: 'ContactController', title: 'Contact' })
            .otherwise({ redirectTo: '/home' });
    }]);


