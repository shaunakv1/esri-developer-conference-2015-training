angular.module( 'optionsApp', [] )
  .controller( 'OptionsCtrl', function ( $scope ) {
    console.log( 'Successful setup!' );
    $scope.names = ['John', 'Dan', 'Tim', 'Andre', 'Angela', 'Maria', 'Andres', 'Chuck', 'Joseph', 'Jose'];
  } )
  .controller('OptionsObjCtrl', function($scope) {
    $scope.people = [
      {name : 'John', gender : 'male', age : 40, id: 'A'},
      {name : 'Dan', gender : 'male', age : 35, id: 'B'},
      {name : 'Tim', gender : 'male', age : 32, id: 'C'},
      {name : 'Andre', gender : 'female', age : 38, id: 'D'},
      {name : 'Angela', gender : 'female', age : 44, id: 'E'},
      {name : 'Maria', gender : 'female', age : 36, id: 'F'},
      {name : 'Andres', gender : 'male', age : 33, id: 'G'},
      {name : 'Chuck', gender : 'male', age : 38, id: 'H'},
      {name : 'Joseph', gender : 'male', age : 28, id: 'I'},
      {name : 'Jose', gender : 'male', age : 25, id: 'J'}
    ];
  });


