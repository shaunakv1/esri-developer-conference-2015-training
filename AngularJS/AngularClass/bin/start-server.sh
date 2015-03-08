#!/bin/sh
OLDDIR=$(pwd)

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR

node app/server.js

cd $OLDDIR