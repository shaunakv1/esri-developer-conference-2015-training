
// Add a dependency on 'prodDir' (the name of the module for our directives)
// Then edit directives.js in this same folder.
var prodControllers = angular.module( 'productControllers', ['prodDir'] );

prodControllers.controller( 'ProductCtrl', ['$scope', '$cacheFactory',
  function ( $scope, $cacheFactory ) {
    console.log( 'Called ProductCtrl.' );

    $scope.cache = $cacheFactory( 'productCache' );
  }] );

prodControllers.controller( 'ProductListCtrl', ['$scope', '$http', '$location',
  function ( $scope, $http, $location ) {
    console.log( 'Called ProductListCtrl' );
    $http( {
      url : '../../../data/northwind-products.json',
      method : 'get',
      cache : $scope.cache
    } )
      .success( function ( products ) {
        $scope.products = products;
      } );

    $scope.fetchProduct = function ( p ) {
      console.log( p );
      $location.path( '/detail/' + p.productID );
    }

  }] );

prodControllers.controller( 'ProductDetailCtrl', ['$scope', '$routeParams', '$http',
  function ( $scope, $routeParams, $http ) {
    $scope.productID = $routeParams.id;
    console.log( 'ProductDetailCtrl invoked with product id: %s', $scope.productID );

    $http( {
      url : '../../../data/northwind-products.json',
      method : 'get',
      cache : $scope.cache
    } )
      .success( function ( products ) {

        products.some( function ( product, idx ) {
          if ( product.productID == $scope.productID ) {
            product.idx = idx;
            $scope.product = product;
            return true;
          }
        } );

        $scope.products = products;
      } );

  }] );

