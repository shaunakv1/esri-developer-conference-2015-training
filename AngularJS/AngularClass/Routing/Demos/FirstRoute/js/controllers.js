var rtControllers = angular.module( 'rtControllers', [] );
rtControllers.controller( 'MainCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'MainCtrl' );
  }] );

rtControllers.controller( 'CustListCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'CustListCtrl' );
  }] );

rtControllers.controller( 'CustDetailCtrl', ['$scope', '$routeParams',
  function ( $scope, $routeParams ) {
    $scope.customerID = $routeParams.custID;
    console.log( 'CustDetailCtrl invoked with customer id: %s', $routeParams.custID );

  }] );
