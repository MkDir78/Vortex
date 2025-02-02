@echo off
cls

color 0b
echo Installing required Node.js modules...
timeout /t 1 > nul
echo Installing express, steam-user, steam-totp, and lodash...
npm install express steam-user steam-totp
timeout /t 2 > nul
echo Installing lodash...
npm install lodash
timeout /t 2 > nul
cls
echo Checking Node.js version...
timeout /t 1 > nul
node -v
timeout /t 2 > nul
color 0a
cls
echo Modules installed successfully!
pause
