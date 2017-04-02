'use strict';

// Define the `productTag` module
var productTag  = angular.module('productTag', []);


// Register `productTag` component, along with its associated controller and template
productTag.
  component('productTag', {
    templateUrl: 'components/ui/tag/tag.template.html',
    bindings: {
        title: '=',
    },
    controller: 
      function TagController() {

      }
  });



