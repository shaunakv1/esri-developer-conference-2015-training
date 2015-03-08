var express = require( 'express' ),
Movie = require( '../models/Movie' );

var router = express.Router();

router.route( '/movies' )

  /*  .post( function ( req, res ) {

   var mov = new Movie();
   mov.firstName = req.body.title;
   mov.lastName = req.body.year;

   mov.save( function ( err ) {
   if ( err )
   res.send( err );

   res.json( { message : 'Movie created!' } );
   } );

   } )*/
  .get( function ( req, res ) {
    Movie.find( function ( err, movies ) {
      if ( err ) {
        res.send( err );
      }
      res.json( movies );
    } );
  } );

router.route( '/movies/:imdbID' )
  .get( function ( req, res ) {
    Movie.findOne( {'imdbID' : req.params.imdbID}, function ( err, mov ) {
      console.log( 'Looking for %s', req.params.imdbID );

      if ( err ) {
        res.send( err );
      }
      res.json( mov );

    } )
  } );

module.exports = router;