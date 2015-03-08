angular.module( 'dataAccess', [] )
  .factory( 'productAccess', ['$http', '$cacheFactory',
    function ( $http, $cacheFactory ) {

      console.log( 'dataAccess.dataFactory invoked.' );
      var retObj = {}, privateData, cache, p;

      cache = $cacheFactory('dataFactory');

      p = $http( {
        url    : '/data/northwind-products.json',
        method : 'get',
        cache  : cache
      } )
        .success( function ( products ) {
          console.log( 'Successful data request!' );
          privateData = products;
        } );

      retObj.getPromise = function() {
        return p;
      };

      retObj.hasData = function () {
        return privateData ? true : false;
      };

      retObj.getProducts = function () {
        return privateData;
      };

      return retObj;
    }] );
