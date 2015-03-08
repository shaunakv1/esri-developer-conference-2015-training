var prodControllers = angular.module( 'productControllers', ['productAccess'] );

prodControllers.controller( 'ProductCtrl', ['$scope', '$cacheFactory',
  function ( $scope, $cacheFactory ) {
    console.log( 'Called ProductCtrl.' );

    // Create a cache to store our product information
    $scope.cache = $cacheFactory( 'productCache' );
  }] );

// Add a dependency on the $location service
prodControllers.controller( 'ProductListCtrl', ['$scope', '$http', '$location',
  'prodFactory', function ( $scope, $http, $location, prodFactory ) {
    console.log( 'Called ProductListCtrl' );

    prodFactory.getProducts().success(function(data) {
      $scope.products = data;
    });

    // Build fetchProduct to redirect to the appropriate route for the clicked-on product
    $scope.fetchProduct = function ( p ) {
      console.log( p );
      $location.path( '/products/' + p.productID );
    }

  }] );

prodControllers.controller( 'ProductDetailCtrl', ['$scope', '$routeParams', '$http', '$location',
  'prodFactory', function ( $scope, $routeParams, $http, $location, prodFactory ) {
    $scope.productID = $routeParams.productID;
    console.log( 'ProductDetailCtrl invoked with product id: %s', $scope.productID );

    // Make an $http request to /data/northwind-products.json,
    // using the cache we set up in ProductCtrl
    // on success, find the appropriate product in the array and add it to the $scope
    prodFactory.getProducts().success(function(data) {
      $scope.products = data;
      $scope.products.some(function(product, idx) {
        if ( product.productID == $scope.productID ) {
          product.idx = idx;
          $scope.product = product;
          return true;
        }
      });
    });


    $scope.goBack = function () {
      $location.path( '/products' );
    };

    $scope.findNext = function( p ) {
      var pos = 0, newID;
      if ( (p.idx + 1) < $scope.products.length) {
        pos = p.idx + 1;
        p.idx ++;
      }

      newID = $scope.products[pos].productID;

      $location.path( '/products/' + newID );
    };

    $scope.findPrevious = function( p ) {
      var pos = $scope.products.length - 1, newID;
      if ((p.idx - 1) >= 0) {
        p.idx --;
        pos = p.idx;
      }

      newID = $scope.products[pos].productID;

      $location.path( '/products/' + newID );
    }
  }] );

