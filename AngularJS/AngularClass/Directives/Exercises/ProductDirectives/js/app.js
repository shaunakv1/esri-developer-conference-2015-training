var pb = angular.module( 'ProductBrowser', ['ngRoute', 'productControllers'] );

pb.config( ['$routeProvider',
  function ( $routeProvider ) {
    $routeProvider
      .when( '/', {
        templateUrl : 'partials/product-list-tpl.html',
        controller : 'ProductListCtrl'
      } )
      .when( '/detail/:id', {
        templateUrl : 'partials/product-detail-tpl.html',
        controller : 'ProductDetailCtrl'
      } )
      .otherwise( {
        redirectTo : '/'
      } );
  }] );
