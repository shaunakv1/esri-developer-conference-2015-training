var prodControllers = angular.module( 'productControllers', ['dataAccess'] );

prodControllers.controller( 'ProductCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'Called ProductCtrl.' );
  }] );

prodControllers.controller( 'ProductListCtrl', ['$scope', 'productAccess', '$location',
  function ( $scope, productAccess, $location ) {
    console.log( 'Called ProductListCtrl' );

    productAccess.getPromise().success( function ( data ) {
      $scope.products = data;
    } );

    // Build fetchProduct to redirect to the appropriate route for the clicked-on product
    $scope.fetchProduct = function ( p ) {
      console.log( p );
      $location.path( '/' + p.productID );
    }

  }] );

prodControllers.controller( 'ProductDetailCtrl', ['$scope', 'productAccess',
  '$routeParams', '$http', '$location',
  function ( $scope, $routeParams, $http, $location ) {
    $scope.productID = $routeParams.productID;
    console.log( 'ProductDetailCtrl invoked with product id: %s', $scope.productID );

    productAccess.getPromise().success( function ( products ) {
      $scope.product = _.findWhere( products, { productID : $scope.productID } );
    } );

    // Then go to partials/product-detail-tpl.html

    $scope.goBack = function () {
      $location.path( '/' )
    };

    $scope.findNext = function ( p ) {
      console.log( p.idx );
      var pos = 0, newID;
      if ( (p.idx + 1) < $scope.products.length ) {
        pos = p.idx + 1;
      }

      newID = $scope.products[pos].productID;

      $location.path( '/' + newID );
    };
  }] );

