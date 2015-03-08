@echo off

set OLD_DIR=%CD%
set OLD_PATH=%PATH%
set NODE_MODULES=%OLD_DIR%\node_modules\.bin
set MONGO=%OLD_DIR%\bin\mongo\x64

rem Set path to node.exe here, if not already set
rem set NODE_PATH=C:\Program Files\nodejs\

echo Setting PATH....
set PATH=%PATH%;%NODE_MODULES%;%OLD_DIR%\bin;%MONGO%

echo PATH successfully set for Node REST Server
echo PATH is %PATH%
