var cityApp = angular.module( 'citiesApp', [] );

// Global so we can check it out at the console
var p = null;

cityApp.controller( 'CityListCtrl', ['$scope', '$http', '$log',
  function ( $scope, $http, $log ) {
  p = $http( {
    url : '/data/cities.json',
    //url : '/data/no-cities.json',
    method : 'get'
  } );

  p.then( function ( retObj ) {
      $log.log( 'Success fired!' );
      $log.log( 'Status: ' + retObj.status );
      $log.log( 'Data: ', retObj.data );
      $scope.cities = retObj.data;
    },
    function ( retObj ) {
      $log.error( 'Error fired!' );
      $log.log( 'Status: ' + retObj.status );  // Only appears with an actual error
      $log.log( 'Data: ', retObj.data ); // Response content
    } );

}] );
