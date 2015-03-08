angular.module( 'productAccess', [] )
  .factory( 'prodFactory', ['$http', function ( $http ) {

    var privateData = {};
    privateData.p = $http( {
      url    : '/data/northwind-products.json',
      method : 'get'
    } )
      .success( function ( products ) {
        privateData.products = products;
      } );

    return {
      getProducts : function () {
        return privateData.p;
      },

      findProductById : function ( prodID ) {
        console.log( 'prodFactory looking for: ' + prodID );
        return privateData.p.success( function ( products ) {
            var found = 'Product ' + prodID + ' not found.';
            products.some( function ( product, idx ) {
              if ( product.productID == prodID ) {
                found = product;
                found.idx = idx;
                return true;
              }
            } );
            console.log( 'prodFactory found: ', found );
            return found;
          }
        )
      }
    };
  }]);