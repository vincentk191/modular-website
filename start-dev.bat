@echo off
echo ================================
echo  Personal Portfolio - Dev Server
echo ================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo The site will open at http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run dev
pause

