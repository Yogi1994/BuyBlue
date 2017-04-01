'use strict';

// Define the `home` module
var home  = angular.module('home', [
  'ngRoute',
]);


// Register `home` component, along with its associated controller and template
home
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'components/pages/home/home.template.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl', [function() {

}]);