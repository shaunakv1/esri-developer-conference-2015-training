var prodControllers = angular.module( 'productControllers', [] );

prodControllers.controller( 'ProductCtrl', ['$scope', '$cacheFactory',
  function ( $scope, $cacheFactory ) {
    console.log( 'Called ProductCtrl.' );

    // Create a cache to store our product information

  }] );

// Add a dependency on the $location service
prodControllers.controller( 'ProductListCtrl', ['$scope', '$http',
  function ( $scope, $http ) {
    console.log( 'Called ProductListCtrl' );
    $http( {
      url : '/data/northwind-products.json',
      method : 'get',
      cache : $scope.cache
    } )
      .success( function ( products ) {
        $scope.products = products;
      } );

    // Build fetchProduct to redirect to the appropriate route for the clicked-on product

  }] );

prodControllers.controller( 'ProductDetailCtrl', ['$scope', '$routeParams', '$http', '$location',
  function ( $scope, $routeParams, $http, $location ) {
    $scope.productID = $routeParams.productID;
    console.log( 'ProductDetailCtrl invoked with product id: %s', $scope.productID );

    // Make an $http request to /data/northwind-products.json,
    // using the cache we set up in ProductCtrl
    // on success, find the appropriate product in the array and add it to the $scope

    // Build functions to implement the next, previous, and back buttons

    // Then go to partials/product-detail-tpl.html and complete it

  }] );

