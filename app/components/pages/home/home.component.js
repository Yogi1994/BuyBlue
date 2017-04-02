'use strict';

// Define the `home` module
var home  = angular.module('home', [
  'ngRoute',
]);

home.component('home', {
  templateUrl: 'components/pages/home/home.template.html',
  controller: function() {
    this.tile = [1,2,3,4,5,6,7,8,9,10];
  }
})
.config(function($routeProvider) {
  $routeProvider.when('/home', {
    template: '<home></home>'
  });
});
