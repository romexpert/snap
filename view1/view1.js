'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.user = {};

        $scope.login = function(){
            $http.post('login', $scope.user)
                .then(() => {
                    console.log('success');
                },
                () => { console.log('fail');});
        }
});