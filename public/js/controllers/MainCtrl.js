angular.module('MainCtrl', []).controller('MainController', ["$rootScope", "$http", "$scope", function ($rootScope, $http, $scope)  {

  $http.get('/smartbinData')
      .success(function(data) {
          $scope.smartbins = data; //Expose the user data to your angular scope
          console.log(data);
              });

  document.body.style.background = "#CEF6F5 url('../img/Achtergrond.png') no-repeat right top"
}]);
