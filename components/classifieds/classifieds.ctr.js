(function() {
    "use strict";
    
    angular
    .module("ngClassifieds")
    .controller("classifiedCtrl", function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
    
    var vm = this;    
    vm.openSideBar = openSideBar;
    vm.closeSideBar = closeSideBar;
    vm.saveClassified = saveClassified;
  //  vm.editClassified = editClassified;
    vm.saveEdit = saveEdit;
//    vm.deleteClassified = deleteClassified;
        
    vm.classifieds = classifiedsFactory.ref;
    console.log(vm.classifieds);
    vm.classifieds.$loaded().then(function(classifieds){
    vm.categories = getCategories(classifieds);
 
    });
        
//     classifiedsFactory.getClassifieds().then(function(classified) {
//          vm.classifieds = classified.data;
//          vm.categories = getCategories(vm.classifieds);
//         //  console.log(classified);
//      });
        
//    // http remote call
//    $http.get('https://api.github.com/users').then(function(response){
//        console.log(response);
//    });
         
        
    $scope.$on('newClassified', function(event, classified) {
        vm.classifieds.$add(classified);
        showToast('Classified saved!');
    });
    
    $scope.$on('editSaved', function(event, message) {
          showToast(message);
    });
        
       function openSideBar() {
           $state.go('classifieds.new');
         //$mdSidenav('left').open();
      }
      
        function closeSideBar() {
          $mdSidenav('left').close();
      }
       
       function saveClassified(classified){
           if(classified) { 
            vm.classifieds.push(classified);
            vm.classified = {};
            vm.closeSideBar();
            showToast("Classified Saved");
        
       }
    }
       
     
       // save edit
       function saveEdit() {
            vm.editing = false;
            vm.classified = {};
            vm.closeSideBar();
            showToast("Edit Saved");
        }
        
      
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
        
       
        var firebase = classifiedsFactory.ref;
        
      
 });
})(); 