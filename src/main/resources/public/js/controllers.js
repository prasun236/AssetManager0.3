angular.module('app.controllers', []).controller('CalculatorController', ['$scope', function($scope) {
    $scope.result    = function() {
    return Math.round($scope.a * Math.pow((1 + ($scope.b/($scope.d * 100))), ($scope.d * $scope.c)));
/*        if ($scope.d == 'Yearly') {
            return Math.round($scope.a * Math.pow((1 + ($scope.b/(1 * 100))), (1 * $scope.c)));
        }
        if ($scope.d == 'Quarterly') {
            return Math.round($scope.a * Math.pow((1 + ($scope.b/(4 * 100))), (4 * $scope.c)));
        }
        if ($scope.d == 'Half Yearly') {
            return Math.round($scope.a * Math.pow((1 + ($scope.b/(2 * 100))), (2 * $scope.c)));
        }
        if ($scope.d == 'Monthly') {
            return Math.round($scope.a * Math.pow((1 + ($scope.b/(12 * 100))), (12 * $scope.c)));
        }*/
    };
}]).controller('testController', function($scope, $http) {

            /*$http.get('http://localhost:9090/api/v1/shipwrecks/1').*/
            $http.get('https://api.mfapi.in/mf/120244').
            then(function(response) {
                $scope.shipwrecks = response.data;
            });

}).controller('AppCtrl', function AppCtrl($scope) {
      $scope.currentNavItem = 'page1';

      $scope.goto = function(page) {
        console.log("Goto " + page);
      }
}).controller('mfController', function($scope, $http) {

              /*$http.get('http://localhost:9090/api/v1/shipwrecks/1'). https://www.amfiindia.com/spages/NAVAll.txt*/
              /*$http.get('https://api.mfapi.in/mf/120244').*/
              $http.get('https://www.amfiindia.com/spages/NAVAll.txt').
              then(function(response) {
                  $scope.shipwrecks = response.data;
              },function myError(response) {
                    $scope.shipwrecks = response.statusText;
              });
}).controller('formCtrl', function($scope) {
      $scope.master = {firstName:"John", lastName:"Doe"};
      $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
      };
      $scope.reset();
});

            /*$http({method: 'GET', url: 'https://www.amfiindia.com/spages/NAVAll.txt'}).
            then(function(response){
            $scope.data = JSON.parse(response);
            });*/


/*.controller("testController", function($scope, $http) {
      $scope.getRequest = function() {
        console.log("I've been pressed!");
        $http.get("http://localhost:9090/api/v1/shipwrecks/1").then(
          function successCallback(response) {
            $scope.response = response;
          },
          function errorCallback(response) {
            console.log("Unable to perform get request");
          }
          return response;
        );
      };
    });*/


/*
.controller('CalculatorController', ['$scope', function($scope) {
    $scope.result    = function() {

    for (var i = 1; i < $scope.c; i++) {

        $scope.result = Math.round($scope.a * Math.pow((1 + ($scope.b/(1 * 100))), (1 * i)));

    }

    return $scope.result;

    };*/
