var dirApp = angular.module( 'dirApp', [] );

dirApp.directive( 'greetings', function () {
  return {
    templateUrl : 'partials/greetings.html',
    restrict : 'E',
    scope : {
      localName : '@personName',
      personName : '@'
    }
  };
} );

dirApp.directive( 'greetPerson', function () {
  return {
    template : 'Hello, {{greetPerson}}',
    restrict : 'A',
    scope : {
      greetPerson : '@',
      personName : '@greetPerson'
    }
  }
} );

dirApp.controller( 'DirCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'This controller doesn\'t do very much at the moment.' );
    $scope.demoName1 = 'Angela';

    $scope.someName = 'Krishna';

  }
] );
