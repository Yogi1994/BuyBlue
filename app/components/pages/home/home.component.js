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
            image: 'img/product/1.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M2 Chino Shorts",
            image: 'img/product/2.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M3 Chino Shorts",
            image: 'img/product/3.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M4 Chino Shorts",
            image: 'img/product/4.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 5Chino Shorts",
            image: 'img/product/5.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 6Chino Shorts",
            image: 'img/product/6.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 5Chino Shorts",
            image: 'img/product/7.jpg',
            tag: "NEW",
            price: 2000
        },
        {
            name: "H&M 6Chino Shorts",
            image: 'img/product/8.jpg',
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
