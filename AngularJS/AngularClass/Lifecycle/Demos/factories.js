var mod = angular.module( 'factoriesApp', [] );

mod.value( 'authorName', 'John Paxton' );

mod.controller( 'MainCtrl', ['$scope', 'testFactory',
  function ( $scope, testFactory ) {
    console.log( 'MainCtrl created' );

    $scope.createdTime = testFactory.getCreatedDate().toString();
    $scope.getTime = testFactory.getTime;
    $scope.getCodeName = testFactory.getCodeName;

  }] );

mod.controller( 'OtherCtrl', ['$scope', 'testFactory',
  function ( $scope, testFactory ) {
    console.log( 'OtherCtrl created' );

    $scope.createdTime = testFactory.getCreatedDate().toString();
    $scope.getTime = testFactory.getTime;
    $scope.getCodeName = testFactory.getCodeName;

    /*
     * Demonstrating that the factory is a singleton. Updating the codename here
     * in OtherCtrl, has an effect on codename in MainCtrl. If they were
     * different factory instances, this would not be the case
     */
    $scope.updateCodeName = function(newCodeName) {
      testFactory.setCodeName( newCodeName );
    }
  }] );

/*
 * We can have dependencies (including other services)
 * We have an initialization function
 * And the function is lazily run (just-in-time, really)
 * And the result is only generated once
 */
mod.factory( 'testFactory', ['authorName', function ( authorName ) {
  var createDate = new Date();
  var codeName = 'Duchess';
  console.log( 'Creating testFactory at %s', createDate.toString() );
  console.log( 'Authored by ' + authorName );

  return {
    getCreatedDate : function () {
      return createDate;
    },

    getTime : function () {
      return new Date().getTime();
    },

    getCodeName : function() {
      return codeName;
    },

    setCodeName : function(newCodeName) {
      codeName = newCodeName;
    }
  }
}] );