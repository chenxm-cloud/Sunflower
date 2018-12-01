@echo off
title Sunflower
color 35
rem author:yelloxing

echo 启动服务器;
cd server
javac -sourcepath lib/jdbc.jar Linking.java;
java Linking;
cd ..

exit