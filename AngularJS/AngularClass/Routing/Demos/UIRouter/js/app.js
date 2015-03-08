var firstRt = angular.module('firstRt', ['ui.router', 'rtControllers']);

firstRt.config( ['$routeProvider',
  function ( $routeProvider ) {
    $routeProvider
      .when('/customers', {
        templateUrl: 'partials/cust-list-tpl.html',
        controller: 'CustListCtrl'
      })
      .when('/customers/:custID', {
        templateUrl : 'partials/cust-detail-tpl.html',
        controller: 'CustDetailCtrl'
      })
      .otherwise({
        redirectTo: '/customers'
      });
  }] );