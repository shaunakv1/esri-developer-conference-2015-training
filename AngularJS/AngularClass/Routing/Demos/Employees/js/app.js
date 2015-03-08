var empApp = angular.module('empApp', ['ngRoute', 'rtControllers']);

empApp.config( ['$routeProvider',
  function ( $routeProvider ) {
    $routeProvider
      .when('/EmployeeList', {
        templateUrl: 'partials/emp-list-tpl.html',
        controller: 'EmpListCtrl'
      })
      .when('/EmployeeDetail/:id', {
        templateUrl : 'partials/emp-detail-tpl.html',
        controller: 'EmpDetailCtrl'
      })
      .when('/EmployeeEdit/:id', {
        templateUrl : 'partials/emp-edit-tpl.html',
        controller: 'EmpEditCtrl'
      })
      .otherwise({
        redirectTo: '/EmployeeList'
      });
  }] );