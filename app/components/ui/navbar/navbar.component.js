'use strict';

// Define the `navBar` module
var navbar  = angular.module('navBar', []);


// Register `navBar` component, along with its associated controller and template
navbar.
  component('navBar', {
    controller: function NavbarController() {
          
    },
    templateUrl: 'components/ui/navbar/navbar.template.html',
    
  });
