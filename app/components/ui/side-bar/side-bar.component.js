'use strict';

// Define the `sideBar` module
var sideBar  = angular.module('sideBar', []);


// Register `sideBar` component, along with its associated controller and template
sideBar.
  component('sideBar', {
    transclude: true,
    controller: function SidebarController() {
          
    },
    templateUrl: 'components/ui/side-bar/side-bar.template.html',
    
  });




// angular.module('docsTabsExample', [])
// .component('myTabs', {
//   transclude: true,
//   controller: function MyTabsController() {
    
//   },
//   templateUrl: 'my-tabs.html'
// })