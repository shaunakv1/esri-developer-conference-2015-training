#!/bin/sh

mongod_start=$(ps -aef | grep mongod | grep -v grep | wc -l | xargs echo -n)

if ! [ "$mongod_start" == 1 ] ; then
  echo "Please start the mongod server and try again."
  exit
fi

npm start