angular.module( 'scopeViews', [] )
  .controller('ParentCtrl', ['$scope', function($scope) {
    $scope.scopeName = 'ParentScope';
    $scope.foo = 'Foo';
  }])
  .controller('Child1Ctrl', ['$scope', function($scope) {
    $scope.scopeName = 'Child1Scope';
  }])
  .controller('Child2Ctrl', ['$scope', function($scope) {
    $scope.scopeName = 'Child2Scope';
  }])
  .controller('GrandchildCtrl', ['$scope', function($scope) {
    $scope.scopeName = 'GrandchildScope';
  }]);

