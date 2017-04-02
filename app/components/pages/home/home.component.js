'use strict';

// Define the `home` module
var home  = angular.module('home', [
  'ngRoute',
]);

home.component('home', {
  templateUrl: 'components/pages/home/home.template.html',
  controller: function() {
    this.productList = [
        {
          name: "H&M Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M2 Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M3 Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M4 Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 5Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 6Chino Shorts",
            image: 'img/dell-streak-7.0.jpg',
            tag: "NEW",
            price: 2000
        }
    ];
  }
})
.config(function($routeProvider) {
  $routeProvider.when('/home', {
    template: '<home></home>'
  });
});
