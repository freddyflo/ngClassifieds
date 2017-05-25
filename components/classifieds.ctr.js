(function() {
    "use strict";
    
    angular
    .module("ngClassifieds")
    .controller("classifiedCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {
        
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
       
       $scope.saveClassified = function(classified){
           if(classified) { 
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSideBar();
            showToast("Classified Saved");
        
       }
    }
       
       // edit classified
       $scope.editClassified = function(classified) {
           $scope.editing = true;
           $scope.openSideBar();
           $scope.classified = classified;
       }
       
       // save edit
        $scope.saveEdit = function() {
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSideBar();
            showToast("Edit Saved");
        }
        
        // TOAST 
        function showToast(message) {
                $mdToast.show(
                $mdToast.simple()
                .content(message)
                .position("top, right")
                .hideDelay(3000)
           );
        }
 });
})(); 