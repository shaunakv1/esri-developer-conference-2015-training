var teamApp = angular.module( 'teamApp', [] );

teamApp.controller( 'TeamCtrl', ['$scope', '$http', '$log', 'numberFilter',
  function ( $scope, $http, $log, numberFilter ) {

  var p = $http( {
    url : '/data/baseball-standings.json',
    method : 'get'
  } )
    .success( function ( data ) {
      $scope.teams = data;
      $scope.teams.forEach(function(team) {
        team.win_percentage = numberFilter( team.win_percentage, 2 );
      })
    } )
    .error( function(err) {
      $log.error( err );
    })

}] );
