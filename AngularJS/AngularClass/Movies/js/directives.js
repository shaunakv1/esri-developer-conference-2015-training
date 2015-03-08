angular.module( 'movieDirectives', [] )
  .directive( 'mFooter', function () {
    return {
      template : '<footer><p>&copy; PickFlix 2014</p></footer>',
      restrict : 'E'
    }
  } )
  .directive( 'mcatdropdown', function (  ) {
    return {
      restrict    : 'E',
      templateUrl : 'partials/mcatdropdown.html',
      scope       : {
        localModel : '='
      }
    }
  } );
