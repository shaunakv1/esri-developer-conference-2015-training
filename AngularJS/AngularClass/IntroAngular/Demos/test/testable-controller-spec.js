describe( 'Testing examples', function () {

  it( 'should pass a basic test (5 === 5)', function () {
    expect( 5 ).toBe( 5 );
  } );

  describe( 'IntroApp Controllers', function () {
    var testScope, controller;

    beforeEach( function () {
      module( 'introApp' );
      inject( function ( $controller, $rootScope ) {
        controller = $controller;
        testScope = $rootScope.$new();
      } );
    } );

    describe( 'Testing FirstCtrl', function () {

      it( 'should have 10 elements in the names array',
        // Inject the controller service: https://code.angularjs.org/1.2.23/docs/api/ng/service/$controller
        function () {

          // Use the controller lookup service to inject a reference to the foo
          // object as $scope, connecting $scope (available only inside the controller)
          // to foo, available here.
          controller( 'FirstCtrl', { $scope : testScope } );

          expect( testScope.names.length ).toBe( 10 );

        } )
    } );

    describe( 'Testing AddNameCtrl', function () {
      it( 'should add a name to the array',
        function () {
          controller( 'AddNameCtrl', { $scope : testScope } );

          var namesCount = testScope.names.length;
          var addedName = 'Fred';
          testScope.addName( addedName );
          expect( testScope.names.length ).toBe( namesCount + 1 );
          expect( testScope.names.indexOf( addedName ) ).toBeGreaterThan( -1 );
        } );

      it( 'should not add a duplicate to the array',
        function () {
          controller( 'AddNameCtrl', { $scope : testScope } );

          var originalCount = testScope.names.length;
          var addedName = testScope.names[2];
          testScope.addName( addedName );
          expect( testScope.names.indexOf( addedName ) ).not.toBe( -1 );
          expect( testScope.names.length ).toBe( originalCount );
        } );
    } );
  } );
} );
