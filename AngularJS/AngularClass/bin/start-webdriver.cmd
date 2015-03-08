@echo off
set OLDDIR=%CD%
cd %~dp0
cd ..
start "webdriver-manager" webdriver-manager start
cd %OLDDIR%
