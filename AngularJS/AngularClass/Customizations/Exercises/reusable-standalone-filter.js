var filterApp = angular.module( 'filterApp', ['customFilters'] );

filterApp.controller( 'FilterCtrl', ['$scope', '$http',
  function ( $scope, $http ) {

//    angular.module('customFilters');
    $http( {
      url : '../../data/baseball-standings.json',
      method : 'get'
    } )
      .success( function ( data ) {
        console.debug( 'Retrieved baseball data!' );
        $scope.teams = data;
        //console.dir( $filter( 'betterThan' )( $scope.teams, 0.4, 40 ) );
      } );

    $scope.startsWith = function(team) {
      var val = $scope.teamName;

      if (! val) {
        return true;
      } else if (val && team.team.indexOf(val) === 0) {
        return true;
      }

      return false;
    }

  }] );

