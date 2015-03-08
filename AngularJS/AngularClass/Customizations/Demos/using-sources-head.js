var empDetailApp = angular.module( "empDetailApp", [] );

empDetailApp.controller( 'EmpCtrl', ['$scope', '$http', function ( $scope, $http ) {
  $http( { url : '../../data/northwind-employees.json', method : 'get' } )
    .success( function ( data ) {
      data[0].origPhotoPath = data[0].photoPath;
      data[0].photoPath = '../../images/' + data[0].photoPath;
      //$scope.employee = data[0];
    } );

  var emp = {
    address         : "507 - 20th Ave. E., Apt. 2A",
    birthDate       : "1948-12-08",
    city            : "Seattle",
    country         : "USA",
    employeeID      : 1,
    extension       : "5467",
    firstName       : "Nancy",
    hireDate        : "1992-05-01",
    homePhone       : "(206) 555-9857",
    lastName        : "Davolio",
    notes           : "Education includes a BA in psychology from Colorado State University in 1970.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
    photoPath       : "../../images/rosie-the-riveter.jpg",
    postalCode      : "98122",
    region          : "WA",
    reportsTo       : 2,
    title           : "Sales Representative",
    titleOfCourtesy : "Ms.",
    origPhotoPath   : 'rosie-the-riveter.jpg'
  };

  $scope.employee = emp;
}] );
