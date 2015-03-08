/*
 * Create a module called 'prodDir'
 * Define a directive on it called 'showInventory'
 * The directive should be restricted to being an attribute and should
 * render the content 'Inventory value: $inventory_value'
 * (Which is currently in partials/product-detail-tpl.html)
 * You will need to pass in an object's worth of data to render a result
 * (Hint, a product object.)
 */
angular.module( 'prodDir', [] )
  .directive( 'showInventory', [function () {
    console.log( 'Called showInventory' );
    return {
      restrict : 'A',
      template : 'Inventory value: {{product.unitPrice * product.unitsInStock | currency}}',
      scope : {
        product : '=showInventory'
      }
    }
  }] )

  /*
   * Part II: Add a directive called navButtons
   * It will have a dependency on the $location service
   * It should be an element, and accept three attributes: collection, item
   * and idProp
   * Define a link function, which is where you will add the event handlers
   * set up in partials/nav-buttons-tpl.html
   *
   */
  .directive('navButtons', ['$location', function($location) {
    console.log('Called navButtons');
    return {
      restrict: 'E',
      templateUrl: 'partials/nav-buttons-tpl.html',
      scope : {
        collection : '=',
        item: '=',
        idProp: '@'
      },
      link : function(scope, element, attrs) {
        scope.goBack = function() {
          console.log( 'goBack() called.' );
          $location.path( '/' );
        };

        scope.findNext = function() {
          console.log( 'findNext()' );
          var currPos = scope.collection.indexOf( scope.item );
          if (currPos + 1 < scope.collection.length) {
            $location.path('/detail/' + scope.collection[currPos+1][scope.idProp])
          }
        };

        scope.findPrevious = function() {
          console.log( 'findPrevious()' );
          var currPos = scope.collection.indexOf( scope.item );
          if (currPos - 1 > -1) {
            $location.path('/detail/' + scope.collection[currPos-1][scope.idProp])
          }
        }
      }
    }
  }]);
