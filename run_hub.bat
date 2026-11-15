@echo off
title AIO 2026 - AI Knowledge Hub
echo ========================================================
echo   AIO 2026 - Kho Tri Thuc & Hoc Tap AI Tuong Tac
echo   Dang khoi dong may chu Localhost tren cong 8080...
echo ========================================================
start "" "http://localhost:8080"
python -m http.server 8080
pause
