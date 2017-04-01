'use strict';

// Define the `productTile` module
var productTile  = angular.module('productTile', []);


// Register `productTile` component, along with its associated controller and template
productTile.
  component('productTile', {
    templateUrl: 'components/ui/product-tile/product-tile.template.html',
    controller: 
      function ProductTileController() {
        
      }
  });

