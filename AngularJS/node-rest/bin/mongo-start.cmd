rem @echo off
set OLDDIR=%CD%
cd %~dp0
rem start "mongod" .\run-mongo.bat
rem Options at http://docs.mongodb.org/manual/reference/program/mongod/
start "mongod" mongod --httpinterface --rest --directoryperdb --dbpath ..\data\mongo
cd %OLDDIR%