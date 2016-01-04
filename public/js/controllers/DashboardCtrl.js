angular.module('DashboardCtrl', []).controller('DashboardController', ["$rootScope", "$http", "$scope","$timeout", function ($rootScope, $http, $scope, $timeout)  {

  $http.get('/smartbinData')
      .success(function(data) {
          $scope.smartbins = data; //Expose the user data to your angular scope
          console.log(data);
              });

  // Function to get the data
    $scope.getData = function(){
      $http.get('/smartbinData')
          .success(function(data) {
              $scope.smartbins = data; //Expose the user data to your angular scope
              console.log(data);
                  });
    };

    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
      $timeout(function() {
        $scope.getData();
        $scope.intervalFunction();
      }, 3000)
    };

    // Kick off the interval
    $scope.intervalFunction();

    $scope.logout=function(){
      $http.post('/logout')
          .success(function(data) {
                  });
    }

  document.body.style.background = "#CEF6F5 url('../img/Achtergrond.png') no-repeat right top"
}]);
