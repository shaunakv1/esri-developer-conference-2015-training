angular.module( 'directApp', [] )
  .controller( 'MainCtrl', ['$scope', '$log',
    function ( $scope, $log ) {
      $log.log( 'MainCtrl is running.' );
      $scope.someName = 'Tim';
    }] )
  .directive('greetPerson', function() {
    return {
      template: 'Hello, {{greetPerson}}.',
      scope: {
        personName : '@greetPerson',
        greetPerson : '@'
      }
    }
  })
  .directive( 'helloWorld', ['$log', function ($log) {
    $log.log( 'Setting up the helloWorld directive' );

    return {
      templateUrl : 'fd-tpl.html',
      restrict: 'CAE',

      scope: {
        myName : '@helloWorld'
      }
    }
  }] );