var Movie = function ( config ) {
  // Set reasonable defaults, copy over whatever else was passed in
  angular.extend( this, this.defaults, this.config );

};

Movie.prototype.defaults = {
  "title"      : 'No Title',
  "year"       : 0,
  "rated"      : 'Q',
  "released"   : '01 January 1800',
  "runtime"    : '0h 00min',
  "genre"      : [],
  "director"   : 'No Director',
  "writer"     : 'No Writer',
  "actors"     : [],
  "plot"       : undefined,
  "poster"     : undefined,
  "imdbRating" : null,
  "imdbVotes"  : null,
  "imdbID"     : null,
  "type"       : null,
  "business"   : 0
};

Movie.prototype.properties = [
  "title",
  "year",
  "rated",
  "released",
  "runtime",
  "genre",
  "director",
  "writer",
  "actors",
  "plot",
  "poster",
  "imdbRating",
  "imdbVotes",
  "imdbID",
  "type",
  "business"
];
