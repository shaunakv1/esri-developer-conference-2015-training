var prodCtrls = angular.module( 'prodCtrls', [] );

// Add the $http variable to the function signature
prodCtrls.controller( 'ProductCtrl', function ( $scope, $http ) {

  // Refactor this to use $http instead of getData()
  // Request data from ../../data/northwind-products-list.json
  $http( { url : '../../../data/northwind-products-list.json', method : 'get'} )
    .success( function ( data, status, headers, config ) {
      $scope.products = data;
    } )
    .error( function ( data, status, headers, config ) {
      console.error( 'Something seems to have gone very wrong: %s, %s', status, data );
    } )
} );

