(function(){
    "use strict";
    
    angular
    .module("ngClassifieds")
    .factory("classifiedsFactory", function($http, $firebaseArray) {
        
 var config = {
    apiKey: "AIzaSyAoeDT6ATgrS7fO0j1EATo8Vc1rfI4bYTA",
    authDomain: "ngclassifieds-e7528.firebaseapp.com",
    databaseURL: "https://ngclassifieds-e7528.firebaseio.com",
    projectId: "ngclassifieds-e7528",
    storageBucket: "ngclassifieds-e7528.appspot.com",
    messagingSenderId: "417804317827"
  };

    firebase.initializeApp(config);
        
    //  var ref = new Firebase('https://ngclassifieds-e7528.firebaseio.com/');
          var roofRef = firebase.database().ref();  
        return {
            ref: $firebaseArray(roofRef)
        }
    });
})();