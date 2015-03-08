angular.module( 'filterEx', [] )
  .controller( 'FilterCtrl', ['$scope', 'dateFilter',
  function($scope, dateFilter) {
    console.debug('Successfully set up the FilterCtrl controller');

    $scope.formatDate = function(dateFmt) {
      var tmpDate = new Date();
      var fmtDate = dateFilter( tmpDate, dateFmt );
      $scope.today = fmtDate;

    }



  }] );