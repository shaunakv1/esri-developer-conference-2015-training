@echo off

set OLDDIR=%CD%
cd %~dp0
cd ..
start "AngularJS Server" node app/server.js
cd %OLDDIR%
