var rtControllers = angular.module( 'rtControllers', [] );
rtControllers.controller( 'MainCtrl', ['$scope', '$cacheFactory',
  function ( $scope, $cacheFactory ) {
    console.log( 'MainCtrl' );

    // Create the cache at the parent level, so it can be accessed
    // by child scopes
    $scope.cache = $cacheFactory( 'customerCache' );
  }] );

rtControllers.controller( 'CustListCtrl', ['$scope', '$http', '$location',
  function ( $scope, $http, $location ) {
    console.log( 'CustListCtrl' );
    $http( {
      url    : '/data/northwind-customers.json',
      method : 'get',
      cache  : $scope.cache
    } )
      .success( function ( customers ) {
        $scope.customers = customers;
      } );

    $scope.fetchCustomer = function ( c ) {
      console.log( c );
      $location.path( '/customers/' + c.customerID );
    }
  }] );

rtControllers.controller( 'CustDetailCtrl', ['$scope', '$routeParams', '$http', '$location',
  function ( $scope, $routeParams, $http, $location ) {
    $scope.customerID = $routeParams.custID;
    console.log( 'CustDetailCtrl invoked with customer id: %s', $routeParams.custID );

    $http( {
      url    : '/data/northwind-customers.json',
      method : 'get',
      cache  : $scope.cache
    } )
      .success( function ( customers ) {
        $scope.customers = customers;
        customers.some( function ( customer ) {
          if ( customer.customerID === $scope.customerID ) {
            $scope.customer = customer;
            return true;
          }
        } )
      } );

    $scope.back = function() {
      $location.path('/customers');
    };

    $scope.forward = function() {
      $scope.customer = $scope.customers[Math.min($scope.customers.length -1, ($scope.customers.indexOf($scope.customer) + 1))];
    };

    $scope.backward = function() {
      $scope.customer = $scope.customers[Math.max(0, ($scope.customers.indexOf($scope.customer) - 1))];
    };
  }] );
