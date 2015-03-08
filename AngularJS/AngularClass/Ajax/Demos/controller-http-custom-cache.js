var cityApp = angular.module( 'citiesApp', [] );

// Global so we can check it out at the console
var p = null,
  customCache = null;

cityApp.controller( 'CityListCtrl', ['$scope', '$http', '$cacheFactory', '$log', 
  function ( $scope, $http, $cacheFactory, $log ) {
    customCache = $cacheFactory.get('cityCache');
    if (! customCache ) {
      customCache = $cacheFactory( 'cityCache' );
    }

    $scope.invalidateCache = function() {
      customCache.removeAll();
    };

    $scope.getCities = function ( searchCity ) {
      p = $http( {
        url : '/data/cities.json',
        method : 'get',
        cache: customCache
      } )
        .success( function ( data, status, headers, config ) {
          // This fires each time, but check Firefox + Firebug or the Network
          // tab in Chrome's developer tools. After the first time, subsequent
          // runs do not make actual Ajax requests
          $log.log( 'Success fired!' );
          $log.log( 'Status: ' + status );
          $scope.cities = data;
          $scope.filterVal = {};
          $scope.filterVal.name = searchCity;
        } )
        .error( function ( data, status, headers, config ) {
          $log.error( 'Error fired!' );
          $log.log( data ); // Response content
          $log.log( 'Status: ' + status );  // Only appears with an actual error
        } );
    }
  }] );
