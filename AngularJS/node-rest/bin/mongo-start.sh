#!/bin/bash
# Assumes that mongod is on your PATH. If not, edit appropriately

olddir=$(pwd)
path_to_mongod=$(which mongod)

if ! [ -x "$path_to_mongod" ] ; then
   echo "Could not find path to mongod. Exiting"
   exit
fi

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR

mongod --httpinterface --rest --directoryperdb --dbpath ../data/mongo > ../data/mongo-start.log &

cd $olddir