var filterApp = angular.module( 'filterApp', [] );

filterApp.controller( 'FilterCtrl', ['$scope', '$http',
  function ( $scope, $http ) {

    $http( {
      url : '/data/baseball-standings.json',
      method : 'get'
    } )
      .success( function ( data ) {
        console.debug( 'Retrieved baseball data!' );
        $scope.teams = data;
      } );

    $scope.winningTeams = function ( team ) {
      var pct = Number( team.win_percentage );
      return pct >= (Number($scope.customWin) || 0.501);
    };
  }] );
