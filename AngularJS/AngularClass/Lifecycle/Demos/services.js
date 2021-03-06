var mod = angular.module( 'servicesApp', [] );

mod.value( 'authorName', 'John Paxton' );

mod.controller( 'MainCtrl', ['$scope', 'testService',
  function ( $scope, testService ) {
    console.log( 'MainCtrl created' );

    $scope.createdTime = testService.getCreatedDate().toString();
    $scope.getTime = testService.getTime;
    $scope.getCodeName = testService.getCodeName;

  }] );

mod.controller( 'OtherCtrl', ['$scope', 'testService',
  function ( $scope, testService ) {
    console.log( 'OtherCtrl created' );

    $scope.createdTime = testService.getCreatedDate().toString();
    $scope.getTime = testService.getTime;
    $scope.getCodeName = testService.getCodeName;

    /*
     * Demonstrating that the factory is a singleton. Updating the codename here
     * in OtherCtrl, has an effect on codename in MainCtrl. If they were
     * different factory instances, this would not be the case
     */
    $scope.updateCodeName = function ( newCodeName ) {
      testService.setCodeName( newCodeName );
    }
  }] );

/*
 * Services can have dependencies
 * Can't take arguments to the constructor _unless_ they are
 * registered AngularJS services/dependencies/providers
 *
 */
mod.service( 'testService', ['authorName', function ( authorName ) {
  // These should be private
  var createDate = new Date();
  var codeName = 'Duchess';

  // Status info
  console.log( 'Creating testFactory at %d', createDate.getTime() );
  console.log( 'Authored by ' + authorName );

  this.getCreatedDate = function () {
    return createDate;
  };

  this.getTime = function () {
    return new Date().getTime();
  };

  this.getCodeName = function () {
    return codeName;
  };

  this.setCodeName = function ( newCodeName ) {
    codeName = newCodeName;
  };
}] );
