// We'll go over what's going on here in detail later on
// For now, we're creating a namespace for the application: introApp
var introApp = angular.module( 'introApp', [] );

// Then we're adding a controller.
// Just a comment.
introApp.controller( 'FirstCtrl', function ( $scope ) {
    this.names = ['John', 'Dan', 'Tim', 'Andre', 'Angela', 'Maria', 'Andres', 'Chuck', 'Joseph', 'Jose'];
    $scope.foo = 'Foo';
  }
);
