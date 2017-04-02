'use strict';

// Define the `brandTile` module
var brandTile  = angular.module('brandTile', []);


// Register `brandTile` component, along with its associated controller and template
brandTile.
  component('brandTile', {
    templateUrl: 'components/ui/brand-tile/brand-tile.template.html',
    controller: 
      function ProductTileController() {
        this.image = [
        	'img/brand/adidas.png',
        	'img/brand/nike.png',
        	'img/brand/nike1.png',
        	'img/brand/nike2.png',
        	'img/brand/nike3.png',
        	'img/brand/puma.png'
        ]
      }
  });

