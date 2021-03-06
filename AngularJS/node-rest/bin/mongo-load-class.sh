#!/bin/sh
OLDDIR=$(pwd)

path_to_mongoimport=$(which mongoimport)

if ! [ -x "$path_to_mongoimport" ] ; then
   echo "Could not find path to mongoimport. Exiting"
   exit
fi

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR

mongoimport -v --directoryperdb --db class --collection top250 --file ../data/imdbTop250.json --jsonArray --drop

mongoimport -v --directoryperdb --db class --collection states --file ../data/states.json --jsonArray --drop
mongoimport -v --directoryperdb --db class --collection stateNames --file ../data/state-names.json --jsonArray --drop

mongoimport -v --directoryperdb --db class --collection categories --drop --file ../data/northwind/northwind-categories.json --jsonArray
mongoimport -v --directoryperdb --db class --collection customers --drop --file ../data/northwind/northwind-customers.json --jsonArray
mongoimport -v --directoryperdb --db class --collection employees --drop --file ../data/northwind/northwind-employees.json --jsonArray
mongoimport -v --directoryperdb --db class --collection order_details --drop --file ../data/northwind/northwind-order-details.json --jsonArray
mongoimport -v --directoryperdb --db class --collection orders --drop --file ../data/northwind/northwind-orders.json --jsonArray
mongoimport -v --directoryperdb --db class --collection products --drop --file ../data/northwind/northwind-products.json --jsonArray
mongoimport -v --directoryperdb --db class --collection regions --drop --file ../data/northwind/northwind-regions.json --jsonArray
mongoimport -v --directoryperdb --db class --collection shippers --drop --file ../data/northwind/northwind-shippers.json --jsonArray
mongoimport -v --directoryperdb --db class --collection suppliers --drop --file ../data/northwind/northwind-suppliers.json --jsonArray
mongoimport -v --directoryperdb --db class --collection territories --drop --file ../data/northwind/northwind-territories.json --jsonArray
mongoimport -v --directoryperdb --db class --collection usstates --drop --file ../data/northwind/northwind-usstates.json --jsonArray

cd $OLDDIR