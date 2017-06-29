(function(){
    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('newClassifiedCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {
        
        var vm = this;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
      
        
        $timeout(function(){
            $mdSidenav('left').open();
        });
        
        $scope.$watch('vm.openSideBar', function(sidenav){
            if (sidenav == false ) {
               $mdSidenav('left')
               .close()
               .then(function(){
                   $state.go('classifieds');
               });
            }
        });
        
      function closeSidebar() {
          vm.openSideBar = false;
      }
        
    function saveClassified(classified) {
        if(classified) {
            
            classified.contact = {
                name: "Fred Aklamanu",
                phone: "+233209378849"
            }
            
            $scope.$emit('newClassified', classified);
            vm.openSideBar = false;
        }
    }
      
        });
})();