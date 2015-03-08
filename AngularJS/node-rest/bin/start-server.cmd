@echo off
set OLDDIR=%CD%
tasklist /FI "IMAGENAME eq mongod.exe" /NH | find /i /n "mongod.exe" > NUL
if "%ERRORLEVEL%"=="0" (
  start "REST server" node app\server.js
) else (
  echo Please start mongod before starting the server: bin\mongo-start.cmd
)
