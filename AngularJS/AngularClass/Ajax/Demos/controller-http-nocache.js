var cityApp = angular.module( 'citiesApp', [] );

// Global so we can check it out at the console
var p = null;

cityApp.controller( 'CityListCtrl', ['$scope', '$http', function ( $scope, $http ) {

  $scope.getCities = function(searchCity) {
    p = $http( {
      url : '../../data/cities.json',
      method : 'get'
    } )
      .success( function ( data, status, headers, config ) {
        console.log( 'Success fired!' );
        console.log( 'Status: ' + status );
        $scope.cities = data;
        $scope.filterVal = {};
        $scope.filterVal.name = searchCity;
      } )
      .error( function ( data, status, headers, config ) {
        console.error( 'Error fired!' );
        console.log( data );
        console.log( 'Status: ' + status );
      } );
  }
}] );
