'use strict';

angular.module('core').controller('HomeController', ['$scope','$rootScope','Authentication','JThemeUtilService',
  function ($scope,$rootScope,Authentication,JThemeUtilService) {

    // This provides Authentication context.
    $scope.authentication = Authentication;



    //Jtheme
    $scope.fixMyAppWidthHeight = JThemeUtilService.fixMyAppWidthHeight;



    //Since we have ng-include, we have to trigger this after html include completes
    $rootScope.$on("$includeContentLoaded", function(event, templateName){
      //console.log("included html loaded..");

      JThemeUtilService.fixMyAppWidthHeight();
    });



    //$scope.fixMyAppWidthHeight();

    //

    //$rootScope.appMinHeight = '816px';
    //console.log($rootScope.appMinHeight);


    //$scope.appMinHeight = $rootScope.appMinHeight;



  }
]);
