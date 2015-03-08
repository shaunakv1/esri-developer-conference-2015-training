var empDetailApp = angular.module( "empDetailApp", [] );

empDetailApp.controller( 'EmpCtrl', ['$scope', '$http', function ( $scope, $http ) {
  $http( {url : '../../data/northwind-employees.json', method : 'get'} )
    .success( function ( data ) {
      data[0].origPhotoPath = data[0].photoPath;
      data[0].photoPath = '../../images/' + data[0].photoPath;
      $scope.employee = data[0];
    } )
}] );
