var cityApp = angular.module( 'citiesApp', [] );

cityApp.factory( 'cityFinder', ['$http', '$cacheFactory', 'filterFilter',
  function ( $http, $cacheFactory, filterFilter ) {
    var retObj = {}, privateData;
    retObj.customCache = $cacheFactory( 'cityCache' );

    retObj.refreshData = function () {
      retObj.customCache.removeAll();
      $http( {
        url : '../../data/cities.json',
        method : 'get',
        cache : retObj.customCache
      } )
        .success( function ( data, status ) {
          console.log( 'Success fired!' );
          console.log( 'Status: ' + status );
          privateData = data;
        } )
        .error( function ( data, status ) {
          console.error( 'Error fired!' );
          console.log( data ); // Response content
          console.log( 'Status: ' + status );  // Only appears with an actual error
        } );
    };

    retObj.clearCache = function() {
      retObj.customCache.removeAll();
    };

    retObj.getCities = function ( filterVal ) {
      return filterFilter( privateData, filterVal );
    };

    retObj.refreshData();

    return retObj;
  }] );


cityApp.controller( 'CityListCtrl', ['$scope', 'cityFinder',
  function ( $scope, cityFinder ) {

    $scope.getCities = function () {
      $scope.cities = cityFinder.getCities( { name: $scope.filterCity } );
    };

    $scope.invalidateCache = function() {
      cityFinder.refreshData();
    }
  }] );

