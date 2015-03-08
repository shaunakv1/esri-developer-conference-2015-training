angular.module( 'movieControllers', [] )
  .controller( 'MainCtrl', ['$scope', '$location', function ( $scope, $location ) {
    console.log( 'MainCtrl called.' );

    // Title configuration
    $scope.setHeader = function ( header ) {
      $scope.movieHeader = header;
    };

    // Active link checker
    $scope.nbElements = {
      search : false,
      browse : false,
      admin  : false
    };

    $scope.$on( '$locationChangeSuccess', function ( evt ) {
      var loc = $location.path().substr( 1 );
      angular.forEach( $scope.nbElements, function ( value, key ) {
        $scope.nbElements[key] = key === loc;
      } );
    } );

  }] )
  .controller( 'StartCtrl', ['$scope', function ( $scope ) {
    console.log( 'StartCtrl called.' );
    $scope.setHeader( 'Our Movie Collection' );

  }] )
  .controller( 'SearchCtrl', ['$scope', '$http', '$location',
    function ( $scope, $http, $location ) {
      console.log( 'SearchCtrl called.' );


      // Dispatch to the results route
      $scope.search = function ( searchTerm ) {
        $location.path( '/results/' + searchTerm );
      };

      $scope.catSearch = function ( event, category, text ) {
        event.preventDefault();
        console.log( 'Searching on ' + text + ' in ' + category );
      };

      $scope.catPick = 'title';
      $scope.setHeader( 'Search for a movie' );


    }] )
  .controller( 'ResultsCtrl', ['$scope', '$filter', '$http', '$routeParams',
    function ( $scope, $filter, $http, $routeParams ) {
      console.log( 'ResultsCtrl called.' );

      if ( $routeParams.searchTerm ) {
        $scope.searchTerm = $routeParams.searchTerm;

        // For our purposes, it's easier to download the entire recordset
        // In reality, with, say 10,000 records, you would implement a
        // server-side search routine which allows this.
        var p = $http( {
          method : 'GET',
          url    : 'http://localhost:3000/movies/top250',
          // Let's cache this for later
          cache  : true
        } );

        p.success( function ( data ) {
          $scope.movies = $filter( 'filter' )( data, $scope.searchTerm );
        } );

      }
    }] )
  .controller( 'BrowseCtrl', ['$scope', function ( $scope ) {
    console.log( 'BrowseCtrl called.' );
    $scope.setHeader( 'Browse the collection' );
  }] ).controller( 'AdminCtrl', ['$scope', function ( $scope ) {
    console.log( 'AdminCtrl called.' );
    $scope.setHeader( 'Administrate the collection' );
  }] );

