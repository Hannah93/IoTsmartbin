angular.module('DashboardCtrl', []).controller('DashboardController', ["$rootScope", "$http", "$scope","$timeout","$location", function ($rootScope, $http, $scope, $timeout,$location)  {

  $http.get('/smartbinData')
      .success(function(data) {
          $scope.smartbins = data; //Expose the user data to your angular scope
          console.log(data);
          $scope.keepgettingdate=true;
              });

  // Function to get the data
    $scope.getData = function(){
      $http.get('/smartbinData')
          .success(function(data) {
              $scope.smartbins = data; //Expose the user data to your angular scope
              console.log(data);
                  });
    };
    
    var timer;
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
      timer= $timeout(function() {
        $scope.getData();
        $scope.intervalFunction();
      }, 3000)
    };

    $scope.$on(
                       "$destroy",
                       function( event ) {
                           $timeout.cancel( timer );
                       }
                   );


    // Kick off the interval
    $scope.intervalFunction();

    $scope.logout=function(){
      $http.post('/logout')
          .success(function(data) {
                  });
    }

    $scope.edit=function(id){
      $location.path( '/Edit/'+ id );
      $scope.keepgettingdate=false;
    }


  document.body.style.background = "#CEF6F5 url('../img/Achtergrond.png') no-repeat right top"
}]);
