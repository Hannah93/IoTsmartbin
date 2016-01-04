angular.module('MainCtrl', []).controller('MainController', ["$rootScope", "$http", "$scope","$timeout", function ($rootScope, $http, $scope, $timeout)  {

  $scope.login = function() {
            $http
                .post('/Login', {
                    user: this.user,
                    password: this.password
                })
                .success(function(data) {
                    console.log(data);
                });
        }

  document.body.style.background = "#CEF6F5 url('../img/Achtergrond.png') no-repeat right top"
}]);
