var teamApp = angular.module( 'teamApp', [] );

teamApp.controller( 'MainCtrl', ['$scope', '$http',
  function ( $scope, $http ) {
    var p = $http( {
      url : '../../data/baseball-standings.json',
      method : 'get',
      cache : true
    } );

    p.success( function ( data, status, headers, config ) {
      $scope.teams = data;
      $scope.currentTeam = $scope.teams[0];
    } );

    $scope.getTeamDetail = function(team) {
      $scope.teams.some(function(chkTeam) {
        if (chkTeam.team_id === team.team_id) {
          $scope.currentTeam = team;
          return true;
        }
      })
    }
  }] );

/*
 * Create a directive "teamDisplay"
 * It should be restricted to being an attribute
 * It should use team-display-tpl.html as a template
 * And should take the value passed to it and rename it
 * to currentTeam, so that team-display-tpl.html is resolved correctly.
 */

teamApp.filter( 'ordinal', function () {
  return function ( input ) {
    input = String( input );
    var retVal = '';
    switch ( input[input.length - 1] ) {
      case '1':
        retVal = 'st';
        break;
      case '2':
        retVal = 'nd';
        break;
      case '3':
        retVal = 'rd';
        break;
      default:
        retVal = 'th';
        break;
    }

    return input + retVal;
  }
} );
