@echo
start "" "http://localhost:3000"
start /b node app.js >nul 2>&1
exit