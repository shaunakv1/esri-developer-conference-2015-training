angular.module( 'filterEx', [] )
  .controller( 'FilterCtrl', ['$scope', '$filter',
  function($scope, $filter) {
    console.debug('Successfully set up the FilterCtrl controller');

    $scope.formatDate = function(dateFmt) {
      var tmpDate = new Date();
      var fmtDate = $filter('date')( tmpDate, dateFmt );
      $scope.today = fmtDate;

    }



  }] );