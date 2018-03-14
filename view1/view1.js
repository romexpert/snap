'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', function ($scope, $rootScope, $location, $http) {
        $scope.user = {};

        $scope.login = function(){
            $http.post('/mocks/login.php', $scope.user)
                .then(() => {
                    console.log('success');
                    $rootScope.user = $scope.user;
                    $location.path("/view2");
                },
                () => {
                    $rootScope.user = null;
                    alert("Login failed");
                });
        }
});