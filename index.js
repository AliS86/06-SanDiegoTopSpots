// created my module
myApp = angular.module('myApp', []);
//created my controller
myApp.controller('myController', function($scope, $http) {
    //download json into my controller
    $http.get('topspots.json').success(function(response) {
        //saved the values in my data
        $scope.myData = response;
    });

});
