/*
 * In this module, we have three controllers:
 * MainCtrl: Where the data is stored ($scope.states) and the parent of the
 *           next two controllers. Also the home to the list view of the
 *           states
 * StatusCtrl: For now, just a status bar of sorts
 * DetailCtrl: The item view for the states
 *
 * Part 1:
 * When the user clicks on a state, the status view and the detail view are
 * sent the details of the state clicked on and update accordingly. Rather
 * than tying the views together tightly, we use the controller to mediate their
 * interactions.
 *
 * Clicking on a state in MainCtrl fires searchState(). This function should
 * broadcast an event, 'selectedState' with the state selected as an argument
 *
 * StatusCtrl should listen for the selectedState event and update the value of
 * $scope.selectedState to be the selected state
 *
 * DetailCtrl should listen for the selectedState event and should update the
 * value of $scope.selectedState to be the selected state
 *
 * Part 2 (Activating the buttons):
 * When the $scope.nextPrev event handler fires in DetailCtrl, emit up the
 * $scope stack an event, 'nextState' communicating the current state, and the
 * direction to go in (1 or -1)
 *
 * In MainCtrl, listen for the 'nextState' event, figure out what the next or
 * previous state should be and then broadcast that as a selectedState event.
 *
 */

angular.module( 'eventApp', [] )
  .controller('StatusCtrl', ['$scope', function($scope) {

    // Listen for the selectedState event here
    $scope.$on( 'selectedState', function ( event, state ) {
      $scope.selectedState = state;
    } );
  }])
  .controller( 'DetailCtrl', ['$scope', function ($scope) {

    // Listen for the selectedState event here as well
    $scope.$on( 'selectedState', function ( event, state ) {
      $scope.selectedState = state;
    } );

    $scope.nextPrev = function(state, dir) {
      // Emit the nextState event here
      $scope.$emit( 'nextState', state, dir );
    }

  }] )
  .controller( 'MainCtrl', ['$scope', '$log', function ($scope, $log) {

    $scope.selectState = function(event) {

      // Angular would probably prefer us not do things this way....
      var searchState = event.target.innerHTML;

      // Since we know name of the state we want, we need to search for it here
      // Capture the state object
      // Broadcast the found state as the argument to a selectedState event
      // Return true to break out of the some() loop
      $scope.states.some(function(state) {
        if (state.name === searchState) {
          $log.log( 'Found %s', state.name );
          $scope.$broadcast( 'selectedState', state );
          return true;
        }
      })
    };

    // Listen for the 'nextState' event, figure out what the next or previous
    // state should be and broadcast that as another 'selectedState' event
    $scope.$on( 'nextState', function ( event, state, dir ) {
      var currentPos = $scope.states.indexOf(state);
      var updatedPos = Math.min(Math.max(currentPos + dir, 0), $scope.states.length -1);
      var nextState = $scope.states[updatedPos];

      $scope.$broadcast( 'selectedState', nextState );
    } );

    $scope.states = [
      {

        "name" : "ALABAMA",
        "abbreviation" : "AL",
        "capital" : "Montgomery",
        "mostPopulousCity" : "Birmingham",
        "population" : 4708708,
        "squareMiles" : 52423,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "EST (UTC-5)",
        "dst" : "YES"
      },
      {

        "name" : "ALASKA",
        "abbreviation" : "AK",
        "capital" : "Juneau",
        "mostPopulousCity" : "Anchorage",
        "population" : 698473,
        "squareMiles" : 656425,
        "timeZone1" : "AKST (UTC-09)",
        "timeZone2" : "HST (UTC-10)",
        "dst" : "YES"
      },
      {

        "name" : "ARIZONA",
        "abbreviation" : "AZ",
        "capital" : "Phoenix",
        "mostPopulousCity" : "Phoenix",
        "population" : 6595778,
        "squareMiles" : 114006,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "NO"
      },
      {

        "name" : "ARKANSAS",
        "abbreviation" : "AR",
        "capital" : "Little Rock",
        "mostPopulousCity" : "Little Rock",
        "population" : 2889450,
        "squareMiles" : 53182,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "CALIFORNIA",
        "abbreviation" : "CA",
        "capital" : "Sacramento",
        "mostPopulousCity" : "Los Angeles",
        "population" : 36961664,
        "squareMiles" : 163707,
        "timeZone1" : "PT (UTC-8)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "COLORADO",
        "abbreviation" : "CO",
        "capital" : "Denver",
        "mostPopulousCity" : "Denver",
        "population" : 5024748,
        "squareMiles" : 104100,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "CONNECTICUT",
        "abbreviation" : "CT",
        "capital" : "Hartford",
        "mostPopulousCity" : "Bridgeport",
        "population" : 3518288,
        "squareMiles" : 5544,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "DELAWARE",
        "abbreviation" : "DE",
        "capital" : "Dover",
        "mostPopulousCity" : "Wilmington",
        "population" : 885122,
        "squareMiles" : 1954,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "FLORIDA",
        "abbreviation" : "FL",
        "capital" : "Tallahassee",
        "mostPopulousCity" : "Jacksonville",
        "population" : 18537969,
        "squareMiles" : 65758,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "CST (UTC-6)",
        "dst" : "YES"
      },
      {

        "name" : "GEORGIA",
        "abbreviation" : "GA",
        "capital" : "Atlanta",
        "mostPopulousCity" : "Atlanta",
        "population" : 9829211,
        "squareMiles" : 59441,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "HAWAII",
        "abbreviation" : "HI",
        "capital" : "Honolulu",
        "mostPopulousCity" : "Honolulu",
        "population" : 1295178,
        "squareMiles" : 10932,
        "timeZone1" : "HST (UTC-10)",
        "timeZone2" : "",
        "dst" : "NO"
      },
      {

        "name" : "IDAHO",
        "abbreviation" : "ID",
        "capital" : "Boise",
        "mostPopulousCity" : "Boise",
        "population" : 1545801,
        "squareMiles" : 83574,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "PT (UTC-8)",
        "dst" : "YES"
      },
      {

        "name" : "ILLINOIS",
        "abbreviation" : "IL",
        "capital" : "Springfield",
        "mostPopulousCity" : "Chicago",
        "population" : 12910409,
        "squareMiles" : 57918,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "INDIANA",
        "abbreviation" : "IN",
        "capital" : "Indianapolis",
        "mostPopulousCity" : "Indianapolis",
        "population" : 6423113,
        "squareMiles" : 36420,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "CST (UTC-6)",
        "dst" : "YES"
      },
      {

        "name" : "IOWA",
        "abbreviation" : "IA",
        "capital" : "Des Moines",
        "mostPopulousCity" : "Des Moines",
        "population" : 3007856,
        "squareMiles" : 56276,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "KANSAS",
        "abbreviation" : "KS",
        "capital" : "Topeka",
        "mostPopulousCity" : "Wichita",
        "population" : 2818747,
        "squareMiles" : 82282,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "KENTUCKY",
        "abbreviation" : "KY",
        "capital" : "Frankfort",
        "mostPopulousCity" : "Louisville",
        "population" : 4314113,
        "squareMiles" : 40411,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "CST (UTC-6)",
        "dst" : "YES"
      },
      {

        "name" : "LOUISIANA",
        "abbreviation" : "LA",
        "capital" : "Baton Rouge",
        "mostPopulousCity" : "New Orleans",
        "population" : 4492076,
        "squareMiles" : 51843,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MAINE",
        "abbreviation" : "ME",
        "capital" : "Augusta",
        "mostPopulousCity" : "Portland",
        "population" : 1318301,
        "squareMiles" : 35387,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MARYLAND",
        "abbreviation" : "MD",
        "capital" : "Annapolis",
        "mostPopulousCity" : "Baltimore",
        "population" : 5699478,
        "squareMiles" : 12407,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MASSACHUSETTS",
        "abbreviation" : "MA",
        "capital" : "Boston",
        "mostPopulousCity" : "Boston",
        "population" : 6593587,
        "squareMiles" : 10555,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MICHIGAN",
        "abbreviation" : "MI",
        "capital" : "Lansing",
        "mostPopulousCity" : "Detroit",
        "population" : 9969727,
        "squareMiles" : 96810,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "CST (UTC-6)",
        "dst" : "YES"
      },
      {

        "name" : "MINNESOTA",
        "abbreviation" : "MN",
        "capital" : "Saint Paul",
        "mostPopulousCity" : "Minneapolis",
        "population" : 5266214,
        "squareMiles" : 86943,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MISSISSIPPI",
        "abbreviation" : "MS",
        "capital" : "Jackson",
        "mostPopulousCity" : "Jackson",
        "population" : 2951996,
        "squareMiles" : 48434,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MISSOURI",
        "abbreviation" : "MO",
        "capital" : "Jefferson City",
        "mostPopulousCity" : "Kansas City",
        "population" : 5987580,
        "squareMiles" : 69709,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "MONTANA",
        "abbreviation" : "MT",
        "capital" : "Helena",
        "mostPopulousCity" : "Billings",
        "population" : 974989,
        "squareMiles" : 147046,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NEBRASKA",
        "abbreviation" : "NE",
        "capital" : "Lincoln",
        "mostPopulousCity" : "Omaha",
        "population" : 1796619,
        "squareMiles" : 77358,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "NEVADA",
        "abbreviation" : "NV",
        "capital" : "Carson City",
        "mostPopulousCity" : "Las Vegas",
        "population" : 2643085,
        "squareMiles" : 110567,
        "timeZone1" : "PT (UTC-8)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "NEW HAMPSHIRE",
        "abbreviation" : "NH",
        "capital" : "Concord",
        "mostPopulousCity" : "Machester",
        "population" : 1324575,
        "squareMiles" : 9351,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NEW JERSEY",
        "abbreviation" : "NJ",
        "capital" : "Trenton",
        "mostPopulousCity" : "Newark",
        "population" : 8707739,
        "squareMiles" : 8722,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NEW MEXICO",
        "abbreviation" : "NM",
        "capital" : "Santa Fe",
        "mostPopulousCity" : "Albuquerque",
        "population" : 2009671,
        "squareMiles" : 121593,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NEW YORK",
        "abbreviation" : "NY",
        "capital" : "Albany",
        "mostPopulousCity" : "New York",
        "population" : 19541453,
        "squareMiles" : 54475,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NORTH CAROLINA",
        "abbreviation" : "NC",
        "capital" : "Raleigh",
        "mostPopulousCity" : "Charlotte",
        "population" : 9380884,
        "squareMiles" : 53821,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "NORTH DAKOTA",
        "abbreviation" : "ND",
        "capital" : "Bismarck",
        "mostPopulousCity" : "Fargo",
        "population" : 646844,
        "squareMiles" : 70704,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "OHIO",
        "abbreviation" : "OH",
        "capital" : "Columbus",
        "mostPopulousCity" : "Columbus",
        "population" : 11542645,
        "squareMiles" : 44828,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "OKLAHOMA",
        "abbreviation" : "OK",
        "capital" : "Oklahoma City",
        "mostPopulousCity" : "Oklahoma City",
        "population" : 3687050,
        "squareMiles" : 69903,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "OREGON",
        "abbreviation" : "OR",
        "capital" : "Salem",
        "mostPopulousCity" : "Portland",
        "population" : 3825657,
        "squareMiles" : 98386,
        "timeZone1" : "PT (UTC-8)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "PENNSYLVANIA",
        "abbreviation" : "PA",
        "capital" : "Harrisburg",
        "mostPopulousCity" : "Philadelphia",
        "population" : 12604767,
        "squareMiles" : 46058,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "RHODE ISLAND",
        "abbreviation" : "RI",
        "capital" : "Providence",
        "mostPopulousCity" : "Providence",
        "population" : 1053209,
        "squareMiles" : 1545,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "SOUTH CAROLINA",
        "abbreviation" : "SC",
        "capital" : "Columbia",
        "mostPopulousCity" : "Columbia",
        "population" : 4561242,
        "squareMiles" : 32007,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "SOUTH DAKOTA",
        "abbreviation" : "SD",
        "capital" : "Pierre",
        "mostPopulousCity" : "Sioux Falls",
        "population" : 812383,
        "squareMiles" : 77121,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "TENNESSEE",
        "abbreviation" : "TN",
        "capital" : "Nashville",
        "mostPopulousCity" : "Memphis",
        "population" : 6296254,
        "squareMiles" : 42146,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "EST (UTC-5)",
        "dst" : "YES"
      },
      {

        "name" : "TEXAS",
        "abbreviation" : "TX",
        "capital" : "Austin",
        "mostPopulousCity" : "Houston",
        "population" : 24782302,
        "squareMiles" : 268601,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "MT (UTC-07)",
        "dst" : "YES"
      },
      {

        "name" : "UTAH",
        "abbreviation" : "UT",
        "capital" : "Salt Lake City",
        "mostPopulousCity" : "Salt Lake City",
        "population" : 2784572,
        "squareMiles" : 84904,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "VERMONT",
        "abbreviation" : "VT",
        "capital" : "Montpelier",
        "mostPopulousCity" : "Burlington",
        "population" : 621760,
        "squareMiles" : 9615,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "VIRGINIA",
        "abbreviation" : "VA",
        "capital" : "Richmond",
        "mostPopulousCity" : "Virginia Beach",
        "population" : 7882590,
        "squareMiles" : 42769,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "WASHINGTON",
        "abbreviation" : "WA",
        "capital" : "Olympia",
        "mostPopulousCity" : "Seattle",
        "population" : 6664195,
        "squareMiles" : 71303,
        "timeZone1" : "PT (UTC-8)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "WEST VIRGINIA",
        "abbreviation" : "WV",
        "capital" : "Charleston",
        "mostPopulousCity" : "Charleston",
        "population" : 1819777,
        "squareMiles" : 24231,
        "timeZone1" : "EST (UTC-5)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "WISCONSIN",
        "abbreviation" : "WI",
        "capital" : "Madison",
        "mostPopulousCity" : "Milwaukee",
        "population" : 5654774,
        "squareMiles" : 65503,
        "timeZone1" : "CST (UTC-6)",
        "timeZone2" : "",
        "dst" : "YES"
      },
      {

        "name" : "WYOMING",
        "abbreviation" : "WY",
        "capital" : "Cheyenne",
        "mostPopulousCity" : "Cheyenne",
        "population" : 544270,
        "squareMiles" : 97818,
        "timeZone1" : "MT (UTC-07)",
        "timeZone2" : "",
        "dst" : "YES"
      }
    ];

  }] );
