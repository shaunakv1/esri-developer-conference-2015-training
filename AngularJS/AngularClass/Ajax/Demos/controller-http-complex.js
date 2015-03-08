var cityApp = angular.module( 'citiesApp', [] );

cityApp.controller( 'CityListCtrl', ['$scope', '$http',
  function ( foo, $http ) {
    var promise = $http( {
      url : '../../data/cities.json',
      method : 'get'
    } );

    promise.success( function ( data, status ) {
      console.log( 'Request returned status code %s', status );
      foo.cities = data;
      console.log( 'Success: data: ' );
      console.dir( data );
    } );

    promise.error( function ( data, status ) {
      console.log( 'Error! ' + status );
    } );

    promise.then( function ( pData ) {
      console.log( '$http request complete!' );
      console.dir( pData );
    }, function () {
      console.log( 'promise.then().somethingWentWrong()' );
    } );

  } ] );
