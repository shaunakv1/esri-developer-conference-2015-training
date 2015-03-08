@echo off

cd %~dp0

mongoimport -v --directoryperdb --db class --collection top250 --file ..\data\imdbTop250.json --jsonArray --drop