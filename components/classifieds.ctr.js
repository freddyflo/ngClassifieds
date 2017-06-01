(function() {
    "use strict";
    
    angular
    .module("ngClassifieds")
    .controller("classifiedCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        
     classifiedsFactory.getClassifieds().then(function(classified) {
          $scope.classifieds = classified.data;
          $scope.categories = getCategories($scope.classifieds);
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
        
      
        
        // delete
        $scope.deleteClassified = function(event, classified) {
            
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + classified.title + '?')
                .ok('Yes')
                .cancel('No')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function() {
                 var index = $scope.classifieds.indexOf(classified); 
                 $scope.classifieds.splice(index,1);
            }, function(){
                
            });    
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
        
        // aggegration
        function getCategories(classifieds) {
            
            var categories = [];
            
            angular.forEach(classifieds, function(item){
                angular.forEach(item.categories, function(category){
                    categories.push(category);
                });
            });
                return _.uniq(categories);
        }
 });
})(); 