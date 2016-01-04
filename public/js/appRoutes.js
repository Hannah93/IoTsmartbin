// public/js/appRoutes.js
  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/Dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/Edit/:binID', {
            templateUrl: 'views/edit.html',
            controller: 'EditController'
        })

        .otherwise({
                    templateUrl: '/views/home.html',
                    controller: 'MainController',

                });

    $locationProvider.html5Mode(true);

}]);
