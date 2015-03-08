angular.module( 'scopeViews', [] )
  .controller('ParentCtrl', ['$scope', function($scope) {
    this.scopeName = 'ParentScope';
    this.foo = 'Foo';
  }])
  .controller('Child1Ctrl', ['$scope', function($scope) {
    this.scopeName = 'Child1Scope';
  }])
  .controller('Child2Ctrl', ['$scope', function($scope) {
    this.scopeName = 'Child2Scope';
  }])
  .controller('GrandchildCtrl', ['$scope', function($scope) {
    this.scopeName = 'GrandchildScope';
  }]);

