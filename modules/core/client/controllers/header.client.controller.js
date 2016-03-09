'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus','JThemeUtilService','$document',
  function ($scope, $state, Authentication, Menus, JThemeUtilService, $document) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Get the account menu
    $scope.accountMenu = Menus.getMenu('account').items[0];

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });


    //Jtheme
    //$scope.fixMyAppWidthHeight = JThemeUtilService.fixMyAppWidthHeight;
    $scope.toggleSideMenu = JThemeUtilService.toggleSideMenu;

    //console.log(document.querySelector('.skin-blue'));
    //console.log(angular.element(document.querySelector('.skin-blue')));


    //console.log($scope.menu);

    var myMenus = [
      {
        'title': 'jHeader',
        'type': 'header'
      }];


    angular.forEach($scope.menu.items, function(item){
      var myMenu = {};
      myMenu.title = item.title;
      myMenu.state = item.state;
      myMenu.iconClass = 'fa fa-dashboard';

      if(item.items && item.items.length > 0){
        myMenu.submenu =[];

        angular.forEach(item.items, function(subItem){
          var mySubMenu = {};
          mySubMenu.title = subItem.title;
          mySubMenu.state = subItem.state;
          myMenu.submenu.push(mySubMenu);
        });


      }


      myMenus.push(myMenu);
    });


    $scope.sideBarMenus = myMenus;
    /*
    $scope.sideBarMenus =
        [
          {
            'title': 'jHeader',
            'type': 'header'
          },
          {
            'title': 'Dashboard',
            'state': 'dashboard',
            'iconClass': 'fa fa-dashboard'
          },
          {
            'title': 'Widgets',
            'state': 'widgets',
            'iconClass': 'fa fa-th',
            'badge': 'new',
            'badgeClass': 'bg-green'
          },
          {
            'title': 'Charts',
            'iconClass': 'fa fa-bar-chart-o',
            'submenu': [
              {
                'title': 'Morris',
                'state': 'charts.morris',
                'iconClass': 'fa fa-dashboard'
              },
              {
                'title': 'HighCharts',
                'state': 'charts.highcharts'
              },
              {
                'title': 'Inline',
                'state': 'charts.inline'
              }
            ]
          }
        ];
*/

  }
]);
