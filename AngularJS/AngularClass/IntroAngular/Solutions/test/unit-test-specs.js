/*
 * Build a set of unit tests for the controller you completed in the last
 * exercise. The structure should look something like this:
 *
 * describe // Top-level for the TeamApp module
 *   beforeEach // Load the teamApp module
 *   describe // Test the TeamCtrl controller
 *     it // Make sure that $scope.teams has ten elements
 *     it // Make sure that the third element is "Red Sox"
 */
describe( 'TeamApp Controller', function () {
  beforeEach( module( 'teamApp' ) );

  describe( 'Testing TeamCtrl', function () {
    it( 'should have 10 elements', inject( function ( $controller ) {
      var testScope = {};
      $controller( 'TeamCtrl', {$scope : testScope} );

      expect( testScope.teams.length ).toBe( 10 );
    } ) );

    it( 'should have the Red Sox as the third element', inject( function ( $controller ) {
      var testScope = {};
      $controller( 'TeamCtrl', {$scope : testScope} );

      // Test for 'Red Sox' by known position
      expect( testScope.teams[2] ).toEqual( 'Red Sox' );

      // Just testing for the presence of 'Red Sox'
      expect( testScope.teams.indexOf('Red Sox') ).toBeGreaterThan( -1 );
    } ) );

  } )
} );
