angular.module('EditCtrl', []).controller('EditController', ["$rootScope", "$http", "$scope","$timeout","$routeParams", function ($rootScope, $http, $scope, $timeout,$routeParams)  {
  $scope.binID = $routeParams.binID;

              $http.get('/smartbinData/'+$scope.binID)
                  .success(function(data) {
                      $scope.smartbin = data;
                      console.log(data);
                          });

                          $scope.logout=function(){
                            $http.post('/logout')
                                .success(function(data) {
                                        });
                          }

                $scope.editLocation=function(){
                  $http
                      .post('/editLocation/'+$scope.binID, {
                          locationBin: this.newLocation,
                      })
                      .success(function(data) {
                          console.log(data);
                          $scope.smartbin = data;
                          $scope.newLocation=null;
                      });
                }

                $scope.editDescription=function(){
                  $http
                      .post('/editDescription/'+$scope.binID, {
                          descriptionBin: this.newDescription,
                      })
                      .success(function(data) {
                          console.log(data);
                          $scope.smartbin = data;
                          $scope.newDescription=null;
                      });
                }


                $scope.customButtonDelete={
                  danger: {
                  label: "Delete",
                  className: "btn-danger",
                  callback: function() {
                    $http
                        .delete('/deleteSmartbin/'+$scope.binID)
                        .success(function(data) {
                            console.log(data);
                        });
                   }
                  },
                  main: {
                  label: "Cancel",
                  className: "btn-default",
                  callback: function() {}
                }
              };

  document.body.style.background = "#CEF6F5 url('../img/Achtergrond.png') no-repeat right top"
}]);
