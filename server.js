const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 最简单的路由
app.get('/', (req, res) => {
  res.send('Hello World! MBTI website is working!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint working!', time: new Date().toISOString() });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 全局错误处理
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
