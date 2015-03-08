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

teamApp.directive('teamDisplay', function() {
  return {
    restrict: 'A',
    templateUrl : 'team-display-tpl.html',
    scope : {
      currentTeam : '=teamDisplay'
    }
  }
});

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
