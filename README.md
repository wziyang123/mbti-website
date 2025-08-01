# MBTI 性格测试网站

一个基于Web的MBTI（迈尔斯-布里格斯类型指标）性格测试网站，帮助用户了解自己的性格类型。

## 功能特点

- 🧠 完整的MBTI性格测试
- 📊 详细的测试结果分析
- 📧 邮件发送测试结果
- 💬 用户反馈功能
- 📱 响应式设计，支持移动端

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **后端**: Node.js, Express.js
- **邮件服务**: Nodemailer
- **部署**: GitHub Pages + Vercel/Netlify

## 本地运行

### 前提条件

- Node.js (版本 14 或更高)
- npm 或 yarn

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/你的用户名/mbti-website.git
cd mbti-website
```

2. 安装依赖
```bash
npm install
```

3. 配置邮件服务（可选）
编辑 `server.js` 文件，替换以下配置：
```javascript
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: 'your-email@qq.com', // 你的QQ邮箱
    pass: 'your-password' // 你的QQ邮箱授权码
  }
});
```

4. 启动服务器
```bash
node server.js
```

5. 访问网站
打开浏览器，访问 `http://localhost:3000`

## 部署到公网

### 方法一：使用 Vercel（推荐）

1. 在 [Vercel](https://vercel.com) 注册账号
2. 连接你的GitHub仓库
3. 选择项目并部署
4. 获得公网访问地址

### 方法二：使用 Netlify

1. 在 [Netlify](https://netlify.com) 注册账号
2. 连接你的GitHub仓库
3. 选择项目并部署
4. 获得公网访问地址

## 项目结构

```
MBTI/
├── public/           # 静态文件
│   ├── index.html    # 主页面
│   ├── script.js     # 前端脚本
│   └── *.jpg         # 图片资源
├── server.js         # 后端服务器
├── package.json      # 项目配置
└── README.md         # 项目说明
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 联系方式

如有问题，请通过以下方式联系：
- 邮箱：your-email@example.com
- GitHub Issues：[项目地址]/issues 