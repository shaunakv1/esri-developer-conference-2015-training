var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var MovieSchema = new Schema( {


  "title"      : String,
  "year"       : String,
  "rated"      : String,
  "released"   : String,
  "runtime"    : String,
  "genre"      : Array,
  "director"   : String,
  "writer"     : Array,
  "actors"     : Array,
  "plot"       : String,
  "poster"     : String,
  "imdbRating" : String,
  "imdbVotes"  : String,
  "imdbID"     : String,
  "type"       : String,
  "business"   : String
}, {
  collection: 'top250'
} );

module.exports = mongoose.model( 'Movie', MovieSchema );
