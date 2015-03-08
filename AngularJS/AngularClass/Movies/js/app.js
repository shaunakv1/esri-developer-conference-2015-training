var app = angular.module( 'movieApp', ['ngRoute', 'movieControllers',
  'movieDirectives', 'ui.bootstrap', 'ngAnimate'] );

app.config( ['$routeProvider', function ( $routeProvider ) {
  $routeProvider
    .when( '/', {
      templateUrl : 'partials/start.html',
      controller  : 'StartCtrl'
    } )
    .when( '/search', {
      templateUrl : 'partials/search.html',
      controller  : 'SearchCtrl'
    } )
    .when( '/browse', {
      templateUrl : 'partials/browse.html',
      controller  : 'BrowseCtrl'
    } )
    .when( '/admin', {
      templateUrl : 'partials/admin.html',
      controller  : 'AdminCtrl'
    } )
    .when('/results/:searchTerm', {
      templateUrl: 'partials/results.html',
      controller: 'ResultsCtrl'
    })
  ;


}] );
