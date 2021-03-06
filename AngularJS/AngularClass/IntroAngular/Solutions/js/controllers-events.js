var teamApp = angular.module( 'teamApp', [] );

teamApp.controller( 'TeamCtrl', function ( $scope ) {
  $scope.teams = ['Mets', 'Yankees', 'Red Sox', 'Phillies', 'Blue Jays',
                  'Braves', 'Orioles', 'Marlins', 'Rays', 'Nationals'];

  // Challenge: Restore the dropped teams.
  // You'll need an array to track the dropped teams
  // And you'll need to modify delTeam, below, to "remember" the dropped team(s)
  $scope.droppedTeams = [];

  // Add a function, addTeam to add a new team to $scope.teams. Don't forget to
  // verify that there is a team to add, and that it's not a duplicate!
  $scope.addTeam = function(newTeam) {
    if (newTeam && $scope.teams.indexOf(newTeam) === -1) {
      $scope.teams.push( newTeam );

      // Clears the new team after adding it.
      $scope.newTeam = '';
    }
  };

  // Add a function, delTeam to delete a team from $scope.teams. As above, check
  // to make sure a team to drop was passed in.
  $scope.delTeam = function(dropTeam) {
    if (dropTeam && $scope.teams.indexOf(dropTeam) > -1) {

      // Easier to maintain
      $scope.droppedTeams.push( dropTeam );
      $scope.teams.splice( $scope.teams.indexOf( dropTeam ), 1 );

    }

    $scope.dropTeam = '';
  };

  // Challenge: Restore the dropped teams
  $scope.restoreTeams = function() {

    // One way of doing things....
    //$scope.teams = $scope.teams.concat( $scope.droppedTeams );

    // This won't work (try it out, though!)
    //$scope.teams.push( $scope.droppedTeams );

    // Another way of doing things.
    //$scope.teams.push.apply( $scope.teams, $scope.droppedTeams );

    // This will prevent accidental duplicates, as a Array.forEach
    //$scope.droppedTeams.forEach(function(team) {
    //  $scope.addTeam( team );
    //});

    // The instructor's preferred version of the above
    $scope.droppedTeams.forEach($scope.addTeam);

    $scope.droppedTeams = [];
  }

} );
