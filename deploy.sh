#!/bin/bash

# MBTI测试网站部署脚本
echo "开始部署MBTI测试网站..."

# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装Node.js
echo "安装Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证Node.js安装
node --version
npm --version

# 安装PM2进程管理器
echo "安装PM2..."
sudo npm install -g pm2

# 安装Nginx
echo "安装Nginx..."
sudo apt install nginx -y

# 启动Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# 创建网站目录
sudo mkdir -p /var/www/mbti-test
sudo chown -R $USER:$USER /var/www/mbti-test

echo "部署脚本执行完成！"
echo "下一步：上传网站文件到 /var/www/mbti-test 目录" 