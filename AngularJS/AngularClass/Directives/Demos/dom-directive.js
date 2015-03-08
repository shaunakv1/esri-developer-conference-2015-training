angular.module( 'docsTimeDirective', [] )
  .controller( 'Controller', ['$scope', function ( $scope ) {
    $scope.format = 'M/d/yy h:mm:ss a';
  }] )
  .directive( 'myCurrentTime', ['$interval', 'dateFilter',
    function ( $interval, dateFilter ) {

      function updateTime2(el, fmt) {
        el.text( dateFilter( new Date(), fmt ) );
      }

      return {
        link : function( scope, element, attrs ) {
          var format,
              timeoutId;

          scope.$watch( attrs.myCurrentTime, function ( value ) {
            format = value;
            updateTime2(element, format);
          } );

          element.on( '$destroy', function () {
            $interval.cancel( timeoutId );
          } );

          // start the UI update process; save the timeoutId for canceling
          timeoutId = $interval( function () {
            updateTime2(element, format); // update DOM
          }, 1000 );
          /*
          function updateTime() {
            element.text( dateFilter( new Date(), format ) );
          }*/

        }
      };
    }] );


