@echo off

set OLD_DIR=%CD%
set OLD_PATH=%PATH%
set NODE_MODULES=%OLD_DIR%\node_modules\.bin
set CHROMEDRIVER=%OLD_DIR%\node_modules\protractor\selenium
set NODE_EXE=%OLD_DIR%\bin\node\x64

echo Setting PATH....
set PATH=%PATH%;%NODE_MODULES%;%CHROMEDRIVER%;%OLD_DIR%\bin;%NODE_EXE%

echo PATH successfully set for Angular JS Class
echo PATH is %PATH%
