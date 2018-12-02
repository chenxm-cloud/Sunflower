#!/bin/bash
# author:yelloxing

echo -e "\033[35m 启动服务器 \033[0m";
cd server

# 编译代码
javac -sourcepath ../lib/jdbc.jar \
    Sqler.java \
    Linking.java;

java -classpath $CLASSPATH:../lib/jdbc.jar \
    Linking;
cd ..