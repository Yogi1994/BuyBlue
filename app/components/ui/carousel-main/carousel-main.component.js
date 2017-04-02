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
        	'img/poster/poster1.jpg',
        	'img/poster/poster2.jpg',
        	'img/poster/poster3.jpg',
        	'img/poster/poster4.jpg'

        ];
      }
  });

