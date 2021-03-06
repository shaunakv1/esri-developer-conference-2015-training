angular.module('dumperApp', [])
  .directive('objectDumper', function() {
    return {
      restrict: 'E',
      scope : {
        obj: '=input'
      },
      link: function(scope, element, attrs) {
        var keys = Object.keys(scope.obj);
        var elStr = '<ul>';
        keys.forEach(function(key) {
          elStr += '<li>' + key + ' : ' + scope.obj[key] + '</li>';
        });
        elStr += '</ul>';
        element.html( elStr );
      }
    }
  })
  .controller('DumperCtrl', ['$scope', function($scope) {
    $scope.foo = 'foo';

    $scope.testObj = {
      foo: 'bar',
      name: 'John',
      age: 40,
      male: true
    };


  }]);
