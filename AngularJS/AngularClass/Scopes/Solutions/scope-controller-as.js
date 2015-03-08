var teamApp = angular.module( 'teamApp', [] );

/*
 * Update the controller to put almost everything on the controller object
 * You can generally switch out "$scope" for "this"
 *
 * Additionally, if you want to see the controller work as-is, uncomment
 * the reference to $scope on the next line
 */
teamApp.controller( 'TeamCtrl', [function () {
  var ctrl = this;

  ctrl.teams = ['Mets', 'Yankees', 'Red Sox', 'Phillies', 'Blue Jays', 'Braves', 'Orioles', 'Marlins', 'Rays', 'Nationals'];

  ctrl.droppedTeams = [];

  ctrl.addTeam = function ( newTeam ) {
    if ( newTeam && ctrl.teams.indexOf( newTeam ) === -1 ) {
      ctrl.teams.push( newTeam );
      ctrl.newTeam = '';
    }
  };

  ctrl.delTeam = function ( dropTeam ) {
    if ( dropTeam && ctrl.teams.indexOf( dropTeam ) > -1 ) {
      ctrl.droppedTeams.push( dropTeam );
      ctrl.teams.splice( ctrl.teams.indexOf( dropTeam ), 1 );
    }
  };

  ctrl.restoreTeams = function () {
    ctrl.droppedTeams.forEach( ctrl.addTeam );
    ctrl.droppedTeams = [];
  }

}] );
