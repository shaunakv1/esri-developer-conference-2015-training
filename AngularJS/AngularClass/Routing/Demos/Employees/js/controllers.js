var rtControllers = angular.module( 'rtControllers', ['ngRoute'] );
rtControllers.controller( 'MainCtrl', ['$scope',
  function ( $scope ) {
    console.log( 'MainCtrl' );
    $scope.displayState = "All Employees";

    // We didn't have to do things this way, just showing off event transmission
    $scope.$on( 'loadDetailView', function ( evt, personName ) {
      $scope.displayState = 'Details for ' + personName;
    } )
  }] );

rtControllers.controller( 'EmpListCtrl', ['$scope', '$http', '$route', '$location',
  function ( $scope, $http, $route, $location ) {
    console.log( 'EmpListCtrl' );
    $http( {
      url : '../../../data/northwind-employees-list.json',
      method : 'get'
    } )
      .success( function ( empList ) {
        $scope.employees = empList;
      } );

    $scope.getDetails = function ( id, $event ) {
      console.log( "Event:", $event );
      console.log( 'Getting details for %s', id );
      $location.path( '/EmployeeDetail/' + id );
    };

    $scope.edit = function ( id ) {
      console.log( 'Going to edit employee #%s', id );
      $location.path( '/EmployeeEdit/' + id );
    };

    $scope.$parent.displayState = "All Employees";

  }] );

rtControllers.controller( 'EmpDetailCtrl', ['$scope', '$http', '$routeParams', '$filter',
  function ( $scope, $http, $routeParams, $filter ) {
    $scope.employeeID = $routeParams.id;
    console.log( 'EmpDetailCtrl invoked with employee id: %s', $routeParams.id );
    $http( {
      url : '../../../data/northwind-employees.json',
      method : 'get',
      cache : true
    } )
      .success( function ( empList ) {
        $scope.emp = $filter( 'filter' )( empList, {employeeID : Number($routeParams.id)} )[0];

      } )

  }] );

rtControllers.controller( 'EmpEditCtrl', ['$scope', '$routeParams',
  '$http', '$filter', 'filterFilter',
  function ( $scope, $routeParams, $http, $filter, filterFn ) {
    console.log( 'Editing employee #%s', $routeParams.id );
    $scope.employeeID = $routeParams.id;

    $http( {
      url : '../../../data/northwind-employees.json',
      method : 'get',
      cache : true
    } )
      .success( function ( data ) {
        //        $scope.e = findEmp( $routeParams.id, data );
/*
        var foo = $filter( 'filter' )( data, {employeeID : Number($routeParams.id)} );
        $scope.e = foo[0];
*/

        $scope.e = filterFn(data, {employeeID : Number($routeParams.id)})[0];
      } );
  }] );

