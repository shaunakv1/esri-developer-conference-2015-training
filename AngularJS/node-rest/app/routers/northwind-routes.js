var express = require( 'express' ),
  _ = require( 'underscore' ),
  Employee = require( '../models/Employee' ),
  Customer = require( '../models/Customer' );
Product = require( '../models/Product' );

function safeSet( model, obj, sFields ) {
  sFields.forEach( function ( field ) {
    if ( obj[field] ) {
      model[field] = obj[field];
    }
  } )
}

var nwr = express.Router();

nwr.get( '/', function ( req, res ) {
  res.json( {message : 'Speeding Planet\'s emulation of the Northwind database.'} );
} );

//########################################################################################
//       EMPLOYEES
//########################################################################################

nwr.route( '/employees' )

  // create an employee (accessed at POST http://localhost:8001/northwind/employees)
  .post( function ( req, res ) {

    var emp = new Employee(); 		// create a new instance of the Employee model
    safeSet( emp, req.body, Employee.getFields() );

    // save the Employee and check for errors
    emp.save( function ( err ) {
      if ( err ) {
        res.json( err );
        res.end();
      } else {
        res.json( {message : 'Employee created!'} );
      }
    } );

  } )
  .get( function ( req, res ) {
    Employee.find( req.query, function ( err, emps ) {
      if ( err ) {
        res.send( err );
      }
      res.json( emps );
    } );
  } );

nwr.route( '/employees/:id' )
  .put( function ( req, res ) {
    Employee.findOne( {employeeID : req.params.id}, function ( err, emp ) {
      if ( err ) {
        res.send( err );
        res.end();
      } else {
        safeSet( emp, req.body, Employee.getFields() );
        emp.save( function ( err ) {
          if ( err ) {
            res.send( err );
          }
          res.json( {message : 'Employee #' + emp.employeeID + ' updated'} )
        } )
      }
    } )
  } )
  .get( function ( req, res ) {
    Employee.findOne( {employeeID : req.params.id}, function ( err, emp ) {
      console.log( 'Searching for EmployeeID %d', req.params.id );

      if ( err ) {
        res.send( err );
      }

      res.json( emp );
    } )
  } )
  .delete( function ( req, res ) {
    Employee.remove( {
      employeeID : req.params.id
    }, function ( err, emp ) {
      if ( err ) {
        res.send( err );
      }
      res.json( {message : 'Employee #' + req.params.id + ' deleted'} );
    } )
  } );

//########################################################################################
//       CUSTOMERS
//########################################################################################

nwr.route( '/customers' )

  // create an customer (accessed at POST http://localhost:8001/northwind/customers)
  .post( function ( req, res ) {


    var cust = new Customer(); 		// create a new instance of the Employee model
    safeSet( cust, req.body, Customer.getFields() );

    // save the Customer and check for errors
    cust.save( function ( err ) {
      if ( err ) {
        res.json( err );
        res.end();
      } else {
        res.json( {message : 'Customer created!'} );
      }
    } );

  } )
  .get( function ( req, res ) {
    Customer.find( req.query, function ( err, custs ) {
      if ( err ) {
        res.send( err );
      }
      res.json( custs );
    } );
  } );

nwr.route( '/customers/:id' )
  .put( function ( req, res ) {
    Customer.findOne( {customerID : req.params.id}, function ( err, cust ) {
      if ( err ) {
        res.send( err );
        res.end();
      } else {
        safeSet( cust, req.body, Customer.getFields() );
        cust.save( function ( err ) {
          if ( err ) {
            res.send( err );
          }
          res.json( {message : 'Customer #' + cust.customerID + ' updated'} )
        } )
      }
    } )
  } )
  .get( function ( req, res ) {
    Customer.findOne( {customerID : req.params.id}, function ( err, cust ) {
      console.log( 'Searching for CustomerID %d', req.params.id );

      if ( err ) {
        res.send( err );
      }

      res.json( cust );
    } )
  } )
  .delete( function ( req, res ) {
    Customer.remove( {
      customerID : req.params.id
    }, function ( err, cust ) {
      if ( err ) {
        res.send( err );
      }
      res.json( {message : 'Customer #' + req.params.id + ' deleted'} );
    } )
  } );


//########################################################################################
//       PRODUCTS
//########################################################################################
nwr.route( '/products' )

  // create an product (accessed at POST http://localhost:8001/northwind/products)
  .post( function ( req, res ) {

    var prod = new Product(); 		// create a new instance of the Product model
    safeSet( prod, req.body, Product.getFields() );

    // save the Product and check for errors
    prod.save( function ( err ) {
      if ( err ) {
        res.json( err );
        res.end();
      } else {
        res.json( {message : 'Product created!'} );
      }
    } );

  } )
  .get( function ( req, res ) {
    Product.find( req.query, function ( err, prods ) {
      if ( err ) {
        res.send( err );
      }
      res.json( prods );
    } );
  } );

nwr.route( '/products/:id' )
  .put( function ( req, res ) {
    Product.findOne( {productID : req.params.id}, function ( err, prod ) {
      if ( err ) {
        res.send( err );
        res.end();
      } else {
        safeSet( prod, req.body, Product.getFields() );
        prod.save( function ( err ) {
          if ( err ) {
            res.send( err );
          }
          res.json( {message : 'Product #' + prod.productID + ' updated'} )
        } )
      }
    } )
  } )
  .get( function ( req, res ) {
    Product.findOne( {productID : req.params.id}, function ( err, prod ) {
      console.log( 'Searching for ProductID %d', req.params.id );

      if ( err ) {
        res.send( err );
      }

      res.json( prod );
    } )
  } )
  .delete( function ( req, res ) {
    Product.remove( {
      productID : req.params.id
    }, function ( err ) {
      if ( err ) {
        res.send( err );
      }
      res.json( {message : 'Product #' + req.params.id + ' deleted'} );
    } )
  } );

module.exports = nwr;