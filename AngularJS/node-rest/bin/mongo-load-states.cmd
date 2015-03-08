@echo off

cd %~dp0

mongoimport -v --directoryperdb --db class --collection states --file ..\data\states.json --jsonArray --drop
mongoimport -v --directoryperdb --db class --collection stateNames --file ..\data\state-names.json --jsonArray --drop