const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

// 中间件
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 邮件配置
const transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: 'your-email@qq.com', // 替换为你的QQ邮箱
    pass: 'your-password' // 替换为你的QQ邮箱授权码
  }
});

// 反馈API
app.post('/api/feedback', async (req, res) => {
  try {
    const { feedback } = req.body;
    
    if (!feedback) {
      return res.status(400).json({ error: '反馈内容不能为空' });
    }

    // 邮件内容
    const mailOptions = {
      from: 'your-email@qq.com', // 替换为你的QQ邮箱
      to: 'your-email@qq.com', // 替换为你的QQ邮箱
      subject: 'MBTI网站反馈',
      html: `
        <h2>用户反馈</h2>
        <p><strong>反馈时间：</strong>${new Date().toLocaleString('zh-CN')}</p>
        <p><strong>反馈内容：</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${feedback.replace(/\n/g, '<br>')}
        </div>
      `
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: '反馈已发送' });
  } catch (error) {
    console.error('发送邮件失败:', error);
    res.status(500).json({ error: '发送失败，请稍后重试' });
  }
});

// 发送测试结果API
app.post('/api/send-results', async (req, res) => {
  try {
    const { userEmail, testResult } = req.body;
    
    if (!userEmail || !testResult) {
      return res.status(400).json({ error: '参数不完整' });
    }

    // 邮件内容
    const mailOptions = {
      from: 'your-email@qq.com', // 替换为你的QQ邮箱
      to: userEmail,
      subject: 'MBTI测试结果',
      html: `
        <h2>🎉 您的MBTI测试结果</h2>
        <p><strong>测试时间：</strong>${new Date(testResult.timestamp).toLocaleString('zh-CN')}</p>
        <div style="background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: white; padding: 20px; border-radius: 16px; margin: 20px 0;">
          <h3 style="margin: 0 0 10px 0; font-size: 1.5em;">您的MBTI类型：${testResult.mbtiType}</h3>
          <p style="margin: 0; font-size: 1.1em;"><strong>${testResult.typeName}</strong></p>
        </div>
        <p style="color: #666; line-height: 1.6; font-size: 1.1em; margin-bottom: 20px;">${testResult.typeDesc}</p>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <p><strong>测试详情：</strong></p>
          <ul>
            <li><strong>MBTI类型：</strong>${testResult.mbtiType}</li>
            <li><strong>类型名称：</strong>${testResult.typeName}</li>
            <li><strong>类型描述：</strong>${testResult.typeDesc}</li>
            <li><strong>测试时间：</strong>${new Date(testResult.timestamp).toLocaleString('zh-CN')}</li>
          </ul>
        </div>
        <p style="color: #666; font-size: 0.9em; margin-top: 20px;">
          感谢您使用我们的MBTI测试！如需更多帮助，请随时联系我们。
        </p>
      `
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: '测试结果已发送' });
  } catch (error) {
    console.error('发送测试结果失败:', error);
    res.status(500).json({ error: '发送失败，请稍后重试' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
