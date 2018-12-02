@echo off
title Sunflower
color 35
REM author:yelloxing

echo 启动服务器;
cd server

REM 编译代码
javac -sourcepath ../lib/jdbc.jar \
    Sqler.java \
    Linking.java;

java -classpath $CLASSPATH:../lib/jdbc.jar \
    Linking;
cd ..
exit