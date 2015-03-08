var dirApp = angular.module( 'dirApp', [] );

dirApp.directive('transTag', function() {
  return {
    templateUrl: 'partials/trans-tag-tpl.html',
    restrict: 'E',
    transclude : true,
    scope : {
      personName : '@',
      otherPerson: '@personName'
    }/*,

    link: function(scope) {
      scope.otherPerson = $scope.otherPerson
    }*/

  }
});

dirApp.controller( 'DirCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'This controller doesn\'t do very much at the moment.' );
    $scope.otherPerson = 'Bob';
  }] );
