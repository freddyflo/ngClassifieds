(function() {
    "use strict";
    
    angular
    .module("ngClassifieds")
    .controller("classifiedCtrl", function($scope, $http, classifiedsFactory, $mdSidenav) {
        
     classifiedsFactory.getClassifieds().then(function(classified) {
          $scope.classifieds = classified.data;
         //  console.log(classified);
      });
        
      $scope.openSideBar = function() {
          $mdSidenav('left').open();
      }
      
       $scope.closeSideBar = function() {
          $mdSidenav('left').close();
      }
 });
})(); 