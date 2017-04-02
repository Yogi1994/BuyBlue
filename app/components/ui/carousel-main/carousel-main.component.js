'use strict';

// Define the `carouselMain` module
var carouselMain  = angular.module('carouselMain', []);


// Register `carouselMain` component, along with its associated controller and template
carouselMain.
  component('carouselMain', {
    templateUrl: 'components/ui/carousel-main/carousel-main.template.html',
    controller: 
      function CarouselMainController() {
        this.image = [
        	'img/dell-streak-7.0.jpg',
        	'img/dell-streak-7.1.jpg',
        	'img/dell-streak-7.2.jpg',
        	'img/dell-streak-7.3.jpg'
        ];
      }
  });

