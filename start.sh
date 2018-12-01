#!/bin/bash
# author:yelloxing

echo -e "\033[35m 启动服务器 \033[0m";
cd server
javac -sourcepath lib/jdbc.jar Linking.java;
java Linking;
cd ..