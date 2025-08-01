// 版本: 2024-01-01 v1.0 - 修复进度显示问题
// 语言配置
const translations = {
  zh: {
    title: "MBTI",
    subtitle: "(16Personalities)",
    desc: "你是哪种MBTI性格？<br>快来测试，发现你的独特人格类型！",
    startBtn: "开始测试",
    highlightTip: "你是e人还是i人，快来测试吧，寻找内心真正的自己！",
    settings: "设置",
    language: "语言设置",
    feedback: "反馈问题",
    feedbackDesc: "如果你发现任何问题或有改进建议，请告诉我们：",
    feedbackPlaceholder: "请详细描述你遇到的问题或建议...",
    submitFeedback: "发送反馈",
    feedbackSuccess: "反馈已发送",
    feedbackSuccessDesc: "感谢你的反馈！我们会认真考虑你的建议。",
    close: "确定",
    testTitle: "30题",
    testSubtitle: "基础版",
    testHot: "近30天热度 12,345",
    testTitle2: "50题",
    testSubtitle2: "进阶版",
    testHot2: "近30天热度 23,456",
    testTitle3: "80题",
    testSubtitle3: "专家版",
    testHot3: "近30天热度 34,567",
    mbtiInfo: "MBTI 简介与权威信息",
    mbtiDesc: "MBTI（Myers-Briggs Type Indicator，迈尔斯-布里格斯性格类型指标）是由 凯瑟琳·布里格斯（Katharine Cook Briggs） 和她的女儿 伊莎贝尔·布里格斯·迈尔斯（Isabel Briggs Myers） 基于荣格的心理类型理论于20世纪40年代共同发明的。MBTI 旨在帮助人们了解自己的性格类型和行为偏好。",
    mbtiTypes: "MBTI 将人格分为16种类型，基于四个维度：<br>外向(E)/内向(I)、感觉(S)/直觉(N)、思考(T)/情感(F)、判断(J)/知觉(P)。",
    mbtiModern: "MBTI 在现代社会被广泛应用于职业规划、团队建设、个人成长等领域。虽然它在学术界存在争议，但在自我认知、沟通和团队协作等实际应用中仍具有较大参考价值。",
    mbtiYouth: "现代年轻人与MBTI：<br>近年来，MBTI 在年轻群体中极为流行，成为社交网络、职场、校园等场景下自我介绍和了解他人的热门工具。许多年轻人通过 MBTI 测试探索自我、寻找同类、增进人际关系。MBTI 不仅帮助大家发现自身性格优势和成长空间，也成为兴趣圈层、交友、恋爱等话题的'社交密码'。",
    mbtiMeaning: "MBTI 代表什么？常见标签：<br>MBTI 代表着一种性格类型的自我认知方式。每种类型都有独特的性格标签，例如：<br>INTJ（策划者/建筑师）、ENFP（竞选者/理想主义者）、ISFJ（守护者/照顾者）、ENTP（发明家/辩论家）等。<br>这些标签常常与'理性''感性''外向''内向''创新''细腻''领导力''共情力'等关键词相关联，成为现代年轻人表达自我、寻找共鸣的重要方式。",
    quizTitle: "MBTI 30题标准版",
    quizSubtitle: "MBTI十六人格(16Personalities)测试能为你提供具体而准确的人格分析，以至于可能会让你感到惊讶。",
    timeLimit: "测试没有具体时间限制，通常在15分钟内完成",
    behaviorTip: "按实际行为和感受选择，而不是想要和期望的",
    avoidRedo: "尽量避免重做上一题，相信你的第一选择就好",
    veryLikeA: "非常像A",
    likeA: "比较像A",
    neutral: "居中",
    likeB: "比较像B",
    veryLikeB: "非常像B",
    advancedQuizTitle: "MBTI 50题进阶版",
    advancedQuizSubtitle: "MBTI十六人格(16Personalities)进阶测试，通过更深入的问题为你提供更精准的人格分析。",
    expertQuizTitle: "MBTI 80题专家版",
    expertQuizSubtitle: "MBTI十六人格(16Personalities)专家测试，通过最深入的问题为你提供最精准的人格分析。",
    // 新增功能文本
    shareResult: "分享结果",
    shareDesc: "将你的MBTI结果分享给朋友",
    copyLink: "复制链接",
    shareWeChat: "分享到微信",
    shareQQ: "分享到QQ",
    shareWeibo: "分享到微博",
    testHistory: "测试历史",
    historyDesc: "查看你之前的测试记录",
    noHistory: "暂无测试记录",
    retakeTest: "重新测试",
    detailedAnalysis: "详细分析",
    analysisDesc: "深入了解你的性格特点",
    personalityTraits: "性格特征",
    strengths: "优势",
    weaknesses: "成长空间",
    careerSuggestions: "职业建议",
    relationshipAdvice: "人际关系建议",
    compatibilityChart: "兼容性图表",
    mostCompatible: "最兼容",
    leastCompatible: "最不兼容",
    dataStatistics: "数据统计",
    statsDesc: "查看测试数据统计",
    totalTests: "总测试次数",
    popularTypes: "热门类型",
    averageTime: "平均用时",
    completionRate: "完成率",
    exportResult: "导出结果",
    exportDesc: "将测试结果保存为PDF",
    downloadPDF: "下载PDF",
    emailResult: "邮件发送",
    emailPlaceholder: "输入邮箱地址",
    sendEmail: "发送邮件",
    emailSuccess: "邮件发送成功",
    emailError: "邮件发送失败",
    saveToLocal: "保存到本地",
    loadFromLocal: "从本地加载",
    clearHistory: "清除历史",
    confirmClear: "确定要清除所有测试历史吗？",
    yes: "是",
    no: "否",
    cancel: "取消",
    confirm: "确认",
    loading: "加载中...",
    saving: "保存中...",
    error: "错误",
    success: "成功",
    warning: "警告",
    info: "提示"
  },
  en: {
    title: "MBTI",
    subtitle: "(16Personalities)",
    desc: "What kind of MBTI personality are you?<br>Take the test and discover your unique personality type!",
    startBtn: "Start Test",
    highlightTip: "Are you an E-person or I-person? Come and test, find your true self within!",
    settings: "Settings",
    language: "Language Settings",
    feedback: "Feedback",
    feedbackDesc: "If you find any issues or have improvement suggestions, please let us know:",
    feedbackPlaceholder: "Please describe the issues you encountered or suggestions in detail...",
    submitFeedback: "Send Feedback",
    feedbackSuccess: "Feedback Sent",
    feedbackSuccessDesc: "Thank you for your feedback! We will carefully consider your suggestions.",
    close: "OK",
    testTitle: "30 Questions",
    testSubtitle: "Basic Version",
    testHot: "30-day popularity 12,345",
    testTitle2: "50 Questions",
    testSubtitle2: "Advanced Version",
    testHot2: "30-day popularity 23,456",
    testTitle3: "80 Questions",
    testSubtitle3: "Expert Version",
    testHot3: "30-day popularity 34,567",
    mbtiInfo: "MBTI Introduction and Authoritative Information",
    mbtiDesc: "MBTI (Myers-Briggs Type Indicator) was jointly invented by Katharine Cook Briggs and her daughter Isabel Briggs Myers in the 1940s based on Jung's psychological type theory. MBTI aims to help people understand their personality types and behavioral preferences.",
    mbtiTypes: "MBTI divides personality into 16 types based on four dimensions:<br>Extraversion(E)/Introversion(I), Sensing(S)/Intuition(N), Thinking(T)/Feeling(F), Judging(J)/Perceiving(P).",
    mbtiModern: "MBTI is widely used in modern society for career planning, team building, and personal growth. Although it has academic controversies, it still has great reference value in practical applications such as self-awareness, communication, and team collaboration.",
    mbtiYouth: "Modern Youth and MBTI:<br>In recent years, MBTI has become extremely popular among young people, becoming a hot tool for self-introduction and understanding others in social networks, workplaces, and campuses. Many young people explore themselves, find like-minded people, and improve interpersonal relationships through MBTI tests. MBTI not only helps everyone discover their personality strengths and growth space, but also becomes a 'social password' for interest circles, making friends, dating, and other topics.",
    mbtiMeaning: "What does MBTI represent? Common labels:<br>MBTI represents a way of self-awareness of personality types. Each type has unique personality labels, such as:<br>INTJ (Architect), ENFP (Campaigner), ISFJ (Defender), ENTP (Debater), etc.<br>These labels are often associated with keywords such as 'rational', 'emotional', 'extroverted', 'introverted', 'innovative', 'sensitive', 'leadership', 'empathy', etc., becoming an important way for modern young people to express themselves and find resonance.",
    quizTitle: "MBTI 30 Questions Standard Version",
    quizSubtitle: "MBTI sixteen personalities (16Personalities) test can provide you with specific and accurate personality analysis, which may surprise you.",
    timeLimit: "The test has no specific time limit, usually completed within 15 minutes",
    behaviorTip: "Choose based on actual behavior and feelings, not what you want or expect",
    avoidRedo: "Try to avoid redoing the previous question, trust your first choice",
    veryLikeA: "Very Like A",
    likeA: "Like A",
    neutral: "Neutral",
    likeB: "Like B",
    veryLikeB: "Very Like B",
    advancedQuizTitle: "MBTI 50 Questions Advanced Version",
    advancedQuizSubtitle: "MBTI sixteen personalities (16Personalities) advanced test, providing you with more accurate personality analysis through deeper questions.",
    expertQuizTitle: "MBTI 80 Questions Expert Version",
    expertQuizSubtitle: "MBTI sixteen personalities (16Personalities) expert test, providing you with the most accurate personality analysis through the deepest questions.",
    // 新增功能文本
    shareResult: "Share Result",
    shareDesc: "Share your MBTI result with friends",
    copyLink: "Copy Link",
    shareWeChat: "Share to WeChat",
    shareQQ: "Share to QQ",
    shareWeibo: "Share to Weibo",
    testHistory: "Test History",
    historyDesc: "View your previous test records",
    noHistory: "No test records yet",
    retakeTest: "Retake Test",
    detailedAnalysis: "Detailed Analysis",
    analysisDesc: "Deep dive into your personality traits",
    personalityTraits: "Personality Traits",
    strengths: "Strengths",
    weaknesses: "Growth Areas",
    careerSuggestions: "Career Suggestions",
    relationshipAdvice: "Relationship Advice",
    compatibilityChart: "Compatibility Chart",
    mostCompatible: "Most Compatible",
    leastCompatible: "Least Compatible",
    dataStatistics: "Data Statistics",
    statsDesc: "View test data statistics",
    totalTests: "Total Tests",
    popularTypes: "Popular Types",
    averageTime: "Average Time",
    completionRate: "Completion Rate",
    exportResult: "Export Result",
    exportDesc: "Save test result as PDF",
    downloadPDF: "Download PDF",
    emailResult: "Email Result",
    emailPlaceholder: "Enter email address",
    sendEmail: "Send Email",
    emailSuccess: "Email sent successfully",
    emailError: "Email sending failed",
    saveToLocal: "Save to Local",
    loadFromLocal: "Load from Local",
    clearHistory: "Clear History",
    confirmClear: "Are you sure you want to clear all test history?",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    confirm: "Confirm",
    loading: "Loading...",
    saving: "Saving...",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Info"
  }
};

// 当前语言
let currentLang = 'zh';

// 更新页面语言
function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // 更新主页面内容
  document.querySelector('.mbti-title').textContent = t.title;
  document.querySelector('.mbti-sub').textContent = t.subtitle;
  document.querySelector('.desc').innerHTML = t.desc;
  document.getElementById('start-btn').textContent = t.startBtn;
  document.querySelector('.highlight-tip').textContent = t.highlightTip;
  
  // 更新测试选择页面
  document.querySelectorAll('.test-card .title')[0].textContent = t.testTitle;
  document.querySelectorAll('.test-card .subtitle')[0].textContent = t.testSubtitle;
  document.querySelectorAll('.test-card .hot')[0].textContent = t.testHot;
  document.querySelectorAll('.test-card .title')[1].textContent = t.testTitle2;
  document.querySelectorAll('.test-card .subtitle')[1].textContent = t.testSubtitle2;
  document.querySelectorAll('.test-card .hot')[1].textContent = t.testHot2;
  document.querySelectorAll('.test-card .title')[2].textContent = t.testTitle3;
  document.querySelectorAll('.test-card .subtitle')[2].textContent = t.testSubtitle3;
  document.querySelectorAll('.test-card .hot')[2].textContent = t.testHot3;
  
  // 更新MBTI信息
  document.querySelector('.mbti-info h2').textContent = t.mbtiInfo;
  document.querySelectorAll('.mbti-info p')[0].innerHTML = t.mbtiDesc;
  document.querySelectorAll('.mbti-info p')[1].innerHTML = t.mbtiTypes;
  document.querySelectorAll('.mbti-info p')[2].textContent = t.mbtiModern;
  document.querySelectorAll('.mbti-info p')[3].innerHTML = t.mbtiYouth;
  document.querySelectorAll('.mbti-info p')[4].innerHTML = t.mbtiMeaning;
  
  // 更新测试页面
  document.querySelector('.quiz-title').textContent = t.quizTitle;
  document.querySelector('.quiz-subtitle').textContent = t.quizSubtitle;
  document.querySelectorAll('.info-text')[0].textContent = t.timeLimit;
  document.querySelectorAll('.info-text')[1].textContent = t.behaviorTip;
  document.querySelectorAll('.info-text')[2].textContent = t.avoidRedo;
  
  // 更新详细选择按钮
  document.querySelectorAll('.quiz-detail')[0].textContent = t.veryLikeA;
  document.querySelectorAll('.quiz-detail')[1].textContent = t.likeA;
  document.querySelectorAll('.quiz-detail')[2].textContent = t.neutral;
  document.querySelectorAll('.quiz-detail')[3].textContent = t.likeB;
  document.querySelectorAll('.quiz-detail')[4].textContent = t.veryLikeB;
  
  // 更新设置面板
  document.querySelector('.settings-header h3').textContent = t.settings;
  document.querySelector('.setting-item h4').textContent = t.language;
  document.querySelectorAll('.setting-item h4')[1].textContent = t.feedback;
  document.querySelectorAll('.setting-item p')[1].textContent = t.feedbackDesc;
  document.getElementById('feedback-text').placeholder = t.feedbackPlaceholder;
  document.getElementById('submit-feedback').textContent = t.submitFeedback;
  
  // 更新成功提示
  document.querySelector('.success-content h3').textContent = t.feedbackSuccess;
  document.querySelector('.success-content p').textContent = t.feedbackSuccessDesc;
  document.querySelector('.success-content button').textContent = t.close;
}

// 更新测试标题
function updateQuizTitle() {
  const t = translations[currentLang];
  if (currentQuizType === 'advanced') {
    document.querySelector('.quiz-title').textContent = t.advancedQuizTitle;
    document.querySelector('.quiz-subtitle').textContent = t.advancedQuizSubtitle;
  } else if (currentQuizType === 'expert') {
    document.querySelector('.quiz-title').textContent = t.expertQuizTitle;
    document.querySelector('.quiz-subtitle').textContent = t.expertQuizSubtitle;
  } else {
    document.querySelector('.quiz-title').textContent = t.quizTitle;
    document.querySelector('.quiz-subtitle').textContent = t.quizSubtitle;
  }
}

// 设置面板功能
document.getElementById('settings-btn').onclick = function() {
  document.getElementById('settings-panel').style.display = 'block';
};

document.getElementById('close-settings').onclick = function() {
  document.getElementById('settings-panel').style.display = 'none';
};

// 记事本按钮功能
document.getElementById('notepad-btn').onclick = function() {
  showNotepadPanel();
};

// 显示记事本面板
function showNotepadPanel() {
  const notepadHTML = `
    <div id="notepad-panel" class="modal-overlay">
      <div class="modal-content" style="max-width: 600px; max-height: 80vh; overflow-y: auto;">
        <div class="modal-header">
          <h2>📝 测试记录</h2>
          <button class="close-btn" onclick="closeNotepadPanel()">&times;</button>
        </div>
        <div class="modal-body">
          <div id="login-section">
            <h3>🔐 登录</h3>
            <p>请先登录以查看和记录您的测试历史</p>
            <div class="login-options">
              <button class="login-btn qq-login" onclick="showQQLogin()">
                <span>📧 QQ邮箱登录</span>
              </button>
            </div>
          </div>
          
          <div id="user-section" style="display: none;">
            <div class="user-info">
              <h3>👤 用户信息</h3>
              <p id="user-email"></p>
              <button class="logout-btn" onclick="logout()">退出登录</button>
            </div>
            
            <div class="test-history">
              <h3>📊 测试历史</h3>
              <div id="history-list">
                <p class="no-history">暂无测试记录</p>
              </div>
            </div>
            
            <div class="send-results">
              <h3>📤 发送结果</h3>
              <p>将您的测试结果发送到邮箱</p>
              <button class="send-btn" onclick="sendTestResults()">发送最新结果</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // 移除现有的记事本面板（如果存在）
  const existingPanel = document.getElementById('notepad-panel');
  if (existingPanel) {
    existingPanel.remove();
  }
  
  // 添加新的记事本面板
  document.body.insertAdjacentHTML('beforeend', notepadHTML);
  
  // 检查是否已登录
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    showUserSection(userEmail);
  }
}

// 关闭记事本面板
function closeNotepadPanel() {
  const panel = document.getElementById('notepad-panel');
  if (panel) {
    panel.remove();
  }
}

// 显示QQ登录
function showQQLogin() {
  const email = prompt('请输入您的QQ邮箱地址：');
  if (email && email.includes('@qq.com')) {
    // 模拟登录验证
    localStorage.setItem('userEmail', email);
    localStorage.setItem('loginType', 'qq');
    showUserSection(email);
  } else if (email) {
    alert('请输入有效的QQ邮箱地址');
  }
}



// 关闭记事本面板
function closeNotepadPanel() {
  const panel = document.getElementById('notepad-panel');
  if (panel) {
    panel.remove();
  }
}

// 显示用户区域
function showUserSection(email) {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('user-section').style.display = 'block';
  document.getElementById('user-email').textContent = `邮箱：${email}`;
  
  // 加载测试历史
  loadTestHistory();
}

// 退出登录
function logout() {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('loginType');
  localStorage.removeItem('testHistory');
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('user-section').style.display = 'none';
}

// 加载测试历史
function loadTestHistory() {
  const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
  const historyList = document.getElementById('history-list');
  
  if (history.length === 0) {
    historyList.innerHTML = '<p class="no-history">暂无测试记录</p>';
    return;
  }
  
  const historyHTML = history.map((record, index) => `
    <div class="history-item">
      <div class="history-header">
        <span class="history-date">${new Date(record.timestamp).toLocaleString()}</span>
        <span class="history-type">${record.mbtiType}</span>
      </div>
      <div class="history-details">
        <p><strong>类型：</strong>${record.mbtiType} - ${record.typeName}</p>
        <p><strong>描述：</strong>${record.typeDesc}</p>
      </div>
    </div>
  `).join('');
  
  historyList.innerHTML = historyHTML;
}

// 记录测试结果
function recordTestResult(mbtiType, typeName, typeDesc) {
  const userEmail = localStorage.getItem('userEmail');
  if (!userEmail) {
    return; // 未登录用户不记录
  }
  
  const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
  const newRecord = {
    timestamp: new Date().toISOString(),
    mbtiType: mbtiType,
    typeName: typeName,
    typeDesc: typeDesc,
    userEmail: userEmail
  };
  
  history.unshift(newRecord); // 添加到开头
  localStorage.setItem('testHistory', JSON.stringify(history));
}

// 发送测试结果
async function sendTestResults() {
  const userEmail = localStorage.getItem('userEmail');
  const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
  
  if (history.length === 0) {
    alert('暂无测试记录可发送');
    return;
  }
  
  const latestResult = history[0];
  
  try {
    const response = await fetch('/api/send-results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: userEmail,
        testResult: latestResult
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('测试结果已发送到您的邮箱！');
    } else {
      alert('发送失败：' + (result.error || '未知错误'));
    }
  } catch (error) {
    console.error('发送测试结果失败:', error);
    alert('发送失败，请检查网络连接');
  }
}

// 点击设置面板外部关闭
document.getElementById('settings-panel').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
};

// 语言切换功能
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.onclick = function() {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    updateLanguage(this.getAttribute('data-lang'));
  };
});

// 反馈功能
document.getElementById('submit-feedback').onclick = async function() {
  const feedback = document.getElementById('feedback-text').value.trim();
  if (!feedback) {
    alert('请填写反馈内容');
    return;
  }
  
  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback })
    });
    
    const result = await response.json();
    
    if (result.success) {
      document.getElementById('settings-panel').style.display = 'none';
      document.getElementById('feedback-success').style.display = 'block';
      document.getElementById('feedback-text').value = '';
    } else {
      alert('发送失败：' + (result.error || '未知错误'));
    }
  } catch (error) {
    console.error('发送反馈失败:', error);
    alert('发送失败，请检查网络连接');
  }
};

document.getElementById('close-success').onclick = function() {
  document.getElementById('feedback-success').style.display = 'none';
};

// 点击成功提示外部关闭
document.getElementById('feedback-success').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
};

// 进入首页和测试选择页面的逻辑
document.getElementById('start-btn').onclick = function() {
  document.querySelector('.main-card').style.display = 'none';
  document.getElementById('test-select').style.display = 'block';
  // 隐藏四个动画人物
  document.querySelectorAll('.character-img').forEach(function(img) {
    img.style.display = 'none';
  });
};

// 30道MBTI题目（基础版 - 生活化、简单直接的问题）
const quizQuestions = [
  { question: "在聚会上，你通常会？", a: "主动认识新朋友", b: "和熟悉的人聊天" },
  { question: "遇到问题时，你习惯？", a: "立即行动解决", b: "先思考再行动" },
  { question: "你更容易被什么感动？", a: "具体的事实", b: "感人的故事" },
  { question: "休息日你更喜欢？", a: "和朋友出去玩", b: "在家放松" },
  { question: "做选择时，你更看重？", a: "实际效果", b: "未来可能" },
  { question: "在聊天中，你更常？", a: "分享自己的观点", b: "倾听别人说话" },
  { question: "你更相信？", a: "亲眼看到的东西", b: "内心的感觉" },
  { question: "你喜欢的工作环境？", a: "热闹的团队", b: "安静的独立空间" },
  { question: "你的生活节奏？", a: "按计划进行", b: "随心情变化" },
  { question: "你更注意？", a: "具体的细节", b: "整体的感觉" },
  { question: "和别人有分歧时，你？", a: "直接说出想法", b: "委婉表达意见" },
  { question: "面对新事物，你？", a: "愿意尝试", b: "保持谨慎" },
  { question: "你更重视？", a: "公平公正", b: "人际关系" },
  { question: "完成任务时，你？", a: "提前完成", b: "最后期限才做" },
  { question: "和朋友相处，你更喜欢？", a: "大家一起玩", b: "少数人深聊" },
  { question: "你更关注？", a: "现在的情况", b: "未来的发展" },
  { question: "处理问题时，你？", a: "理性分析", b: "凭感觉判断" },
  { question: "你的生活方式？", a: "有规律有序", b: "随性自由" },
  { question: "认识新朋友时，你？", a: "主动打招呼", b: "等别人先说话" },
  { question: "你更相信？", a: "科学数据", b: "个人经验" },
  { question: "做事情时，你？", a: "制定详细计划", b: "随机应变" },
  { question: "面对原则问题时，你？", a: "坚持原则", b: "考虑他人感受" },
  { question: "参与活动时，你？", a: "积极参与", b: "安静配合" },
  { question: "你更在意？", a: "最终结果", b: "参与过程" },
  { question: "你更喜欢？", a: "现实的事物", b: "想象的世界" },
  { question: "发现问题时，你？", a: "直接指出", b: "委婉提醒" },
  { question: "安排时间时，你？", a: "提前规划", b: "临时决定" },
  { question: "表达情绪时，你？", a: "直接表达", b: "内心消化" },
  { question: "设定目标时，你？", a: "明确具体", b: "灵活开放" },
  { question: "你的注意力？", a: "关注当下", b: "思考未来" },
];

// 50道MBTI题目（进阶版 - 更深入、更具体的问题）
const advancedQuizQuestions = [
  { question: "在企业战略制定中，你更倾向于？", a: "数据驱动的决策", b: "直觉与经验结合" },
  { question: "面对组织变革阻力时，你会？", a: "系统分析原因并逐步推进", b: "激发团队情感共识" },
  { question: "你如何评估一个战略项目的可行性？", a: "详细的风险与收益分析", b: "宏观趋势与团队信心" },
  { question: "在多元文化团队中，你更注重？", a: "流程与标准统一", b: "尊重个体差异" },
  { question: "遇到高层意见分歧时，你？", a: "组织理性讨论", b: "寻求妥协与平衡" },
  { question: "推动创新时，你更看重？", a: "技术突破", b: "市场需求" },
  { question: "企业危机时刻，你的第一反应是？", a: "冷静制定应急预案", b: "快速安抚团队情绪" },
  { question: "在战略合作谈判中，你？", a: "坚持底线原则", b: "灵活调整策略" },
  { question: "你更喜欢哪种领导风格？", a: "目标导向型", b: "关系导向型" },
  { question: "面对行业颠覆性创新，你？", a: "主动拥抱变化", b: "谨慎评估风险" },
  { question: "在组织架构调整时，你？", a: "优先考虑效率", b: "优先考虑人员稳定" },
  { question: "你如何激励高绩效团队？", a: "物质激励", b: "精神认可" },
  { question: "面对复杂利益相关者时，你？", a: "平衡各方诉求", b: "坚定推进核心目标" },
  { question: "你更擅长哪类战略分析？", a: "定量数据建模", b: "定性趋势判断" },
  { question: "在企业文化建设中，你？", a: "制定明确价值观", b: "鼓励自发形成氛围" },
  { question: "遇到重大决策压力时，你？", a: "独立思考后拍板", b: "广泛征求意见" },
  { question: "你更重视哪类战略资源？", a: "核心技术", b: "关键人才" },
  { question: "在跨部门协作中，你？", a: "强调流程规范", b: "促进沟通理解" },
  { question: "你如何看待失败？", a: "宝贵的学习机会", b: "需要尽量避免" },
  { question: "面对长期战略目标，你？", a: "分阶段设定里程碑", b: "保持灵活调整空间" },
  { question: "你更倾向于哪种创新管理？", a: "结构化流程", b: "自由探索" },
  { question: "在高压环境下，你？", a: "理性分解任务", b: "激发团队士气" },
  { question: "你如何处理组织内部冲突？", a: "中立调解", b: "引导双方共赢" },
  { question: "面对外部竞争压力，你？", a: "加快内部变革", b: "稳步优化现有流程" },
  { question: "你更看重哪种战略评估？", a: "量化指标", b: "综合主观判断" },
  { question: "在企业并购中，你？", a: "注重文化整合", b: "注重资源整合" },
  { question: "你如何推动组织学习？", a: "建立知识管理体系", b: "鼓励经验分享" },
  { question: "面对战略失败时，你？", a: "复盘总结教训", b: "快速调整方向" },
  { question: "你更喜欢哪种决策方式？", a: "集体决策", b: "高层拍板" },
  { question: "在企业社会责任方面，你？", a: "主动承担", b: "合规为主" },
  { question: "你如何看待数字化转型？", a: "必然趋势", b: "需谨慎推进" },
  { question: "面对人才流失，你？", a: "优化激励机制", b: "加强文化归属感" },
  { question: "你更重视哪类外部合作？", a: "技术联盟", b: "市场联盟" },
  { question: "在组织激励中，你？", a: "注重公平性", b: "注重个体差异" },
  { question: "你如何看待组织扁平化？", a: "提升沟通效率", b: "可能削弱管理" },
  { question: "面对新兴市场，你？", a: "积极布局", b: "谨慎试水" },
  { question: "你更倾向于哪种战略规划周期？", a: "长期规划", b: "短期灵活调整" },
  { question: "在企业治理中，你？", a: "强调制度规范", b: "强调领导力" },
  { question: "你如何看待多元化战略？", a: "分散风险", b: "聚焦核心" },
  { question: "面对组织低效时，你？", a: "优化流程", b: "调整人员" },
  { question: "你更喜欢哪种创新激励？", a: "奖金奖励", b: "职位晋升" },
  { question: "在企业数字化过程中，你？", a: "优先数据安全", b: "优先业务创新" },
  { question: "你如何看待远程办公？", a: "提升灵活性", b: "影响团队凝聚力" },
  { question: "面对组织创新瓶颈，你？", a: "引入外部资源", b: "激发内部潜力" },
  { question: "你更喜欢哪种决策支持？", a: "大数据分析", b: "专家咨询" },
  { question: "在企业文化传承中，你？", a: "保留传统", b: "不断革新" },
  { question: "你如何看待组织学习能力？", a: "核心竞争力", b: "辅助能力" },
  { question: "面对组织变革挑战，你？", a: "主动适应变化", b: "保持稳定发展" },
  { question: "在组织战略执行中，你更重视？", a: "结果导向", b: "过程管理" },
  { question: "面对组织文化冲突时，你？", a: "推动文化融合", b: "保持文化多样性" },
];

// 80道MBTI题目（专家版 - 最深入、最专业的问题）
const expertQuizQuestions = [
  { question: "在全球化战略布局中，你更重视？", a: "标准化流程复制", b: "本土化适应性" },
  { question: "面对颠覆性技术冲击，你的应对策略是？", a: "主动拥抱并重塑业务", b: "渐进式技术升级" },
  { question: "在组织数字化转型中，你优先考虑？", a: "技术架构重构", b: "人员能力提升" },
  { question: "面对ESG投资趋势，你？", a: "主动布局可持续发展", b: "合规性优先" },
  { question: "在人工智能应用决策中，你？", a: "追求技术领先优势", b: "注重伦理风险控制" },
  { question: "面对供应链重构压力，你？", a: "多元化供应商布局", b: "深化核心伙伴关系" },
  { question: "在元宇宙战略规划中，你？", a: "抢先布局虚拟经济", b: "观望市场成熟度" },
  { question: "面对碳中和发展要求，你？", a: "制定长期减排路线", b: "满足短期合规要求" },
  { question: "在区块链技术应用中，你？", a: "探索去中心化模式", b: "优化现有中心化系统" },
  { question: "面对数据隐私法规，你？", a: "建立隐私保护体系", b: "最小化合规成本" },
  { question: "在量子计算投资决策中，你？", a: "抢占技术制高点", b: "等待技术成熟" },
  { question: "面对生物技术革命，你？", a: "布局生命科学产业", b: "关注传统产业升级" },
  { question: "在太空经济战略中，你？", a: "参与太空资源开发", b: "专注地球业务发展" },
  { question: "面对脑机接口技术，你？", a: "探索人机融合未来", b: "保持技术观望态度" },
  { question: "在基因编辑伦理决策中，你？", a: "推动技术造福人类", b: "严格管控技术风险" },
  { question: "面对纳米技术应用，你？", a: "投资材料科学突破", b: "关注现有技术优化" },
  { question: "在可再生能源转型中，你？", a: "全面能源结构重塑", b: "渐进式绿色升级" },
  { question: "面对智能城市发展，你？", a: "参与城市数字化建设", b: "专注企业数字化转型" },
  { question: "在虚拟现实商业应用中，你？", a: "探索沉浸式体验", b: "优化传统交互方式" },
  { question: "面对3D打印产业化，你？", a: "布局个性化制造", b: "提升传统制造效率" },
  { question: "在物联网生态建设中，你？", a: "构建智能互联平台", b: "优化现有设备连接" },
  { question: "面对边缘计算发展，你？", a: "部署分布式计算架构", b: "强化云端计算能力" },
  { question: "在5G应用场景开发中，你？", a: "探索高带宽新应用", b: "优化现有网络服务" },
  { question: "面对云计算架构选择，你？", a: "采用混合云策略", b: "坚持私有云部署" },
  { question: "在机器学习算法应用中，你？", a: "追求算法创新突破", b: "优化现有算法性能" },
  { question: "面对自然语言处理技术，你？", a: "开发智能对话系统", b: "提升传统客服效率" },
  { question: "在计算机视觉应用中，你？", a: "构建视觉AI平台", b: "优化图像处理流程" },
  { question: "面对语音识别技术，你？", a: "开发语音交互产品", b: "提升传统输入方式" },
  { question: "在推荐系统优化中，你？", a: "个性化推荐算法", b: "标准化推荐流程" },
  { question: "面对知识图谱构建，你？", a: "构建领域知识网络", b: "优化信息检索系统" },
  { question: "在深度学习框架选择中，你？", a: "自研专用框架", b: "使用成熟开源框架" },
  { question: "面对强化学习应用，你？", a: "探索自主决策系统", b: "优化规则驱动决策" },
  { question: "在联邦学习部署中，你？", a: "保护数据隐私", b: "集中数据训练" },
  { question: "面对生成对抗网络，你？", a: "开发创意生成系统", b: "优化内容审核流程" },
  { question: "在自动驾驶技术发展中，你？", a: "布局L4级自动驾驶", b: "优化L2级辅助驾驶" },
  { question: "面对无人机应用场景，你？", a: "探索商业无人机服务", b: "优化传统物流配送" },
  { question: "在机器人技术应用中，你？", a: "开发智能服务机器人", b: "优化工业自动化" },
  { question: "面对可穿戴设备发展，你？", a: "布局健康监测设备", b: "优化传统医疗设备" },
  { question: "在智能家居生态中，你？", a: "构建互联家居平台", b: "优化单一设备功能" },
  { question: "面对智慧医疗发展，你？", a: "布局AI辅助诊断", b: "优化传统诊疗流程" },
  { question: "在金融科技应用中，你？", a: "探索区块链金融", b: "优化传统金融服务" },
  { question: "面对教育科技发展，你？", a: "开发个性化学习平台", b: "优化传统教学模式" },
  { question: "在零售科技应用中，你？", a: "布局无人零售", b: "优化传统零售体验" },
  { question: "面对物流科技发展，你？", a: "探索智能物流系统", b: "优化传统物流流程" },
  { question: "在农业科技应用中，你？", a: "布局精准农业", b: "优化传统农业技术" },
  { question: "面对能源科技发展，你？", a: "探索新能源技术", b: "优化传统能源效率" },
  { question: "在建筑科技应用中，你？", a: "布局智能建筑", b: "优化传统建筑工艺" },
  { question: "面对交通科技发展，你？", a: "探索智慧交通系统", b: "优化传统交通管理" },
  { question: "在环保科技应用中，你？", a: "布局污染治理技术", b: "优化传统环保工艺" },
  { question: "面对海洋科技发展，你？", a: "探索海洋资源开发", b: "优化传统海洋产业" },
  { question: "在航天科技应用中，你？", a: "布局商业航天", b: "优化传统航天技术" },
  { question: "面对核能技术发展，你？", a: "探索核聚变技术", b: "优化传统核能安全" },
  { question: "在材料科技应用中，你？", a: "布局新型材料研发", b: "优化传统材料性能" },
  { question: "面对化学科技发展，你？", a: "探索绿色化学工艺", b: "优化传统化工流程" },
  { question: "在生物科技应用中，你？", a: "布局基因治疗技术", b: "优化传统生物制药" },
  { question: "面对医学科技发展，你？", a: "探索精准医疗", b: "优化传统医疗技术" },
  { question: "在药物研发中，你？", a: "布局AI药物发现", b: "优化传统药物筛选" },
  { question: "面对医疗器械发展，你？", a: "探索智能医疗器械", b: "优化传统医疗设备" },
  { question: "在疫苗研发中，你？", a: "布局mRNA技术", b: "优化传统疫苗工艺" },
  { question: "面对细胞治疗发展，你？", a: "探索干细胞治疗", b: "优化传统细胞技术" },
  { question: "在基因测序应用中，你？", a: "布局全基因组测序", b: "优化传统基因检测" },
  { question: "面对蛋白质组学发展，你？", a: "探索蛋白质功能研究", b: "优化传统蛋白质分析" },
  { question: "在代谢组学应用中，你？", a: "布局代谢通路研究", b: "优化传统代谢分析" },
  { question: "面对表观遗传学发展，你？", a: "探索表观调控机制", b: "优化传统遗传研究" },
  { question: "在合成生物学应用中，你？", a: "布局人工生命系统", b: "优化传统生物工程" },
  { question: "面对脑科学发展，你？", a: "探索认知科学突破", b: "优化传统神经研究" },
  { question: "在认知科学应用中，你？", a: "布局人工智能认知", b: "优化传统认知研究" },
  { question: "面对心理学科技发展，你？", a: "探索数字化心理治疗", b: "优化传统心理干预" },
  { question: "在神经科学应用中，你？", a: "布局神经调控技术", b: "优化传统神经治疗" },
  { question: "面对行为科学发展，你？", a: "探索行为预测模型", b: "优化传统行为分析" },
  { question: "在社会科学应用中，你？", a: "布局大数据社会研究", b: "优化传统社会调查" },
  { question: "面对经济学科技发展，你？", a: "探索算法经济学", b: "优化传统经济模型" },
  { question: "在政治学科技应用中，你？", a: "布局数字治理平台", b: "优化传统政治分析" },
  { question: "面对社会学科技发展，你？", a: "探索社会网络分析", b: "优化传统社会研究" },
  { question: "在人类学科技应用中，你？", a: "布局数字人类学", b: "优化传统人类学研究" },
  { question: "面对考古科技发展，你？", a: "探索数字化考古技术", b: "优化传统考古方法" },
  { question: "在语言学科技应用中，你？", a: "布局计算语言学", b: "优化传统语言研究" },
  { question: "面对哲学科技发展，你？", a: "探索人工智能哲学", b: "优化传统哲学思辨" },
  { question: "在伦理学科技应用中，你？", a: "布局技术伦理学", b: "优化传统伦理研究" },
  { question: "面对未来科技发展，你更倾向于？", a: "主动探索未知领域", b: "稳健推进已知技术" },
];

let quizIndex = 0;
let quizAnswers = [];
let currentQuizType = 'basic'; // 'basic', 'advanced', 或 'expert'

// 验证问题数量
function verifyQuestionCounts() {
  console.log('=== 问题数量验证 ===');
  console.log('基础版问题数量:', quizQuestions.length);
  console.log('进阶版问题数量:', advancedQuizQuestions.length);
  console.log('专家版问题数量:', expertQuizQuestions.length);
  
  // 检查是否有重复问题
  const basicQuestions = quizQuestions.map(q => q.question);
  const advancedQuestions = advancedQuizQuestions.map(q => q.question);
  const expertQuestions = expertQuizQuestions.map(q => q.question);
  
  console.log('基础版问题示例:', basicQuestions.slice(0, 3));
  console.log('进阶版问题示例:', advancedQuestions.slice(0, 3));
  console.log('专家版问题示例:', expertQuestions.slice(0, 3));
  
  // 检查重复
  const basicSet = new Set(basicQuestions);
  const advancedSet = new Set(advancedQuestions);
  const expertSet = new Set(expertQuestions);
  
  console.log('基础版是否有重复:', basicQuestions.length !== basicSet.size);
  console.log('进阶版是否有重复:', advancedQuestions.length !== advancedSet.size);
  console.log('专家版是否有重复:', expertQuestions.length !== expertSet.size);
  
  // 检查问题数量是否符合预期
  console.log('基础版问题数量是否符合预期(30):', quizQuestions.length === 30);
  console.log('进阶版问题数量是否符合预期(50):', advancedQuizQuestions.length === 50);
  console.log('专家版问题数量是否符合预期(80):', expertQuizQuestions.length === 80);
  
  // 检查问题唯一性
  const allQuestions = [...basicQuestions, ...advancedQuestions, ...expertQuestions];
  const allQuestionsSet = new Set(allQuestions);
  console.log('所有问题总数:', allQuestions.length);
  console.log('唯一问题总数:', allQuestionsSet.size);
  console.log('是否有重复问题:', allQuestions.length !== allQuestionsSet.size);
  
  console.log('==================');
}

// 显示题目
function showQuizQuestion() {
  let questions;
  if (currentQuizType === 'basic') {
    questions = quizQuestions;
  } else if (currentQuizType === 'advanced') {
    questions = advancedQuizQuestions;
  } else {
    questions = expertQuizQuestions;
  }
  
  // 调试信息
  console.log('=== 问题显示调试信息 ===');
  console.log('当前测试类型:', currentQuizType);
  console.log('问题数组长度:', questions.length);
  console.log('当前问题索引:', quizIndex);
  console.log('当前问题:', questions[quizIndex]);
  console.log('======================');
  
  // 设置DOM元素 - 只设置一次，避免冲突
  document.getElementById('quiz-current').innerText = quizIndex + 1;
  
  // 强制设置quiz-total，确保正确显示
  const totalElement = document.getElementById('quiz-total');
  totalElement.innerText = questions.length;
  totalElement.textContent = questions.length;
  totalElement.innerHTML = questions.length;
  
  document.getElementById('quiz-bar').style.width = ((quizIndex + 1) / questions.length * 100) + '%';
  
  // 强制确保设置成功
  setTimeout(() => {
    const totalElement = document.getElementById('quiz-total');
    if (totalElement && totalElement.innerText !== questions.length.toString()) {
      totalElement.innerText = questions.length;
      console.log('强制更新quiz-total为:', questions.length);
    }
  }, 50);
  
  // 多重保险：再次强制更新
  setTimeout(() => {
    const totalElement = document.getElementById('quiz-total');
    totalElement.innerText = questions.length;
    console.log('二次强制更新quiz-total为:', questions.length);
  }, 100);
  
  // 第三次强制更新
  setTimeout(() => {
    const totalElement = document.getElementById('quiz-total');
    totalElement.innerText = questions.length;
    console.log('三次强制更新quiz-total为:', questions.length);
  }, 200);
  
  // 设置题目内容
  document.getElementById('quiz-question').innerText = questions[quizIndex].question;
  document.getElementById('quiz-a').innerText = 'A. ' + questions[quizIndex].a;
  document.getElementById('quiz-b').innerText = 'B. ' + questions[quizIndex].b;
  document.getElementById('quiz-footer').innerText = '';
  document.querySelector('.quiz-choices').style.display = '';
  document.querySelector('.quiz-detail-choices').style.display = '';
  
  // 验证设置后的值
  console.log('设置后quiz-total的值:', document.getElementById('quiz-total').innerText);
  console.log('=== 问题显示完成 ===');
  
  // 添加更多调试信息
  console.log('当前测试类型:', currentQuizType);
  console.log('问题数组长度:', questions.length);
  console.log('应该显示的总数:', questions.length);
  console.log('实际显示的总数:', document.getElementById('quiz-total').innerText);
}

// 下一题
function nextQuizQuestion(score) {
  quizAnswers.push(score);
  quizIndex++;
  let questions;
  if (currentQuizType === 'basic') {
    questions = quizQuestions;
  } else if (currentQuizType === 'advanced') {
    questions = advancedQuizQuestions;
  } else {
    questions = expertQuizQuestions;
  }
  if (quizIndex < questions.length) {
    showQuizQuestion();
  } else {
    // 计算MBTI结果
    calculateMBTIResult();
  }
}

// 计算MBTI结果
function calculateMBTIResult() {
  let eScore = 0, iScore = 0;
  let sScore = 0, nScore = 0;
  let tScore = 0, fScore = 0;
  let jScore = 0, pScore = 0;
  
  let questions;
  if (currentQuizType === 'basic') {
    questions = quizQuestions;
  } else if (currentQuizType === 'advanced') {
    questions = advancedQuizQuestions;
  } else {
    questions = expertQuizQuestions;
  }
  
  // 根据题目类型计算分数
  for (let i = 0; i < quizAnswers.length; i++) {
    const score = quizAnswers[i];
    
    if (currentQuizType === 'basic') {
      // 30题版本的题目分类
      // E/I 题目 (1, 4, 6, 11, 15, 18, 22, 26, 30)
      if ([0, 3, 5, 10, 14, 17, 21, 25, 29].includes(i)) {
        if (score > 0) eScore += Math.abs(score);
        else iScore += Math.abs(score);
      }
      // S/N 题目 (2, 7, 10, 16, 20, 23, 27, 31)
      else if ([1, 6, 9, 15, 19, 22, 26, 30].includes(i)) {
        if (score > 0) sScore += Math.abs(score);
        else nScore += Math.abs(score);
      }
      // T/F 题目 (3, 8, 12, 17, 21, 24, 28, 32)
      else if ([2, 7, 11, 16, 20, 23, 27, 31].includes(i)) {
        if (score > 0) tScore += Math.abs(score);
        else fScore += Math.abs(score);
      }
      // J/P 题目 (5, 9, 13, 18, 22, 25, 29, 33)
      else if ([4, 8, 12, 17, 21, 24, 28, 32].includes(i)) {
        if (score > 0) jScore += Math.abs(score);
        else pScore += Math.abs(score);
      }
    } else if (currentQuizType === 'advanced') {
      // 50题版本的题目分类
      // E/I 题目 (1, 4, 6, 11, 15, 18, 22, 26, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 50)
      if ([0, 3, 5, 10, 14, 17, 21, 25, 29, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 49].includes(i)) {
        if (score > 0) eScore += Math.abs(score);
        else iScore += Math.abs(score);
      }
      // S/N 题目 (2, 7, 10, 16, 20, 23, 27, 31, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50)
      else if ([1, 6, 9, 15, 19, 22, 26, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49].includes(i)) {
        if (score > 0) sScore += Math.abs(score);
        else nScore += Math.abs(score);
      }
      // T/F 题目 (3, 8, 12, 17, 21, 24, 28, 32, 33, 35, 37, 39, 41, 43, 45, 47, 49, 50)
      else if ([2, 7, 11, 16, 20, 23, 27, 31, 32, 34, 36, 38, 40, 42, 44, 46, 48, 49].includes(i)) {
        if (score > 0) tScore += Math.abs(score);
        else fScore += Math.abs(score);
      }
      // J/P 题目 (5, 9, 13, 18, 22, 25, 29, 33, 34, 36, 38, 40, 42, 44, 46, 48, 50)
      else if ([4, 8, 12, 17, 21, 24, 28, 32, 33, 35, 37, 39, 41, 43, 45, 47, 49].includes(i)) {
        if (score > 0) jScore += Math.abs(score);
        else pScore += Math.abs(score);
      }
    } else {
      // 80题版本的题目分类
      // E/I 题目 (1, 4, 6, 11, 15, 18, 22, 26, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 80)
      if ([0, 3, 5, 10, 14, 17, 21, 25, 29, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 79].includes(i)) {
        if (score > 0) eScore += Math.abs(score);
        else iScore += Math.abs(score);
      }
      // S/N 题目 (2, 7, 10, 16, 20, 23, 27, 31, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80)
      else if ([1, 6, 9, 15, 19, 22, 26, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79].includes(i)) {
        if (score > 0) sScore += Math.abs(score);
        else nScore += Math.abs(score);
      }
      // T/F 题目 (3, 8, 12, 17, 21, 24, 28, 32, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 80)
      else if ([2, 7, 11, 16, 20, 23, 27, 31, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 79].includes(i)) {
        if (score > 0) tScore += Math.abs(score);
        else fScore += Math.abs(score);
      }
      // J/P 题目 (5, 9, 13, 18, 22, 25, 29, 33, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80)
      else if ([4, 8, 12, 17, 21, 24, 28, 32, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79].includes(i)) {
        if (score > 0) jScore += Math.abs(score);
        else pScore += Math.abs(score);
      }
      // 处理第80道题目（索引79）- 默认为E/I题目
      else if (i === 79) {
        if (score > 0) eScore += Math.abs(score);
        else iScore += Math.abs(score);
      }
    }
  }
  
  // 确定MBTI类型
  const mbtiType = 
    (eScore > iScore ? 'E' : 'I') +
    (sScore > nScore ? 'S' : 'N') +
    (tScore > fScore ? 'T' : 'F') +
    (jScore > pScore ? 'J' : 'P');
  
  // 显示结果
  showMBTIResult(mbtiType);
}

// 显示MBTI结果
function showMBTIResult(mbtiType) {
  const mbtiInfo = {
    'INTJ': { 
      name: '建筑师', 
      desc: '富有想象力和战略性的思考者，一切都要经过深思熟虑。',
      detail: {
        strengths: ['战略思维', '独立性强', '追求完美', '逻辑分析能力强', '创新思维'],
        weaknesses: ['过于理想化', '不善于表达情感', '可能显得冷漠', '对他人要求过高'],
        careers: ['战略分析师', '投资顾问', '科研人员', '建筑师', '系统分析师', '管理咨询师', '法律顾问', '技术总监'],
        workStyle: '喜欢独立工作，追求系统性和逻辑性，善于制定长期战略。',
        communication: '直接而简洁，重视效率和逻辑，可能显得过于理性。',
        leadership: '天生的战略家，善于制定计划和目标，但可能缺乏情感关怀。'
      }
    },
    'INTP': { 
      name: '逻辑学家', 
      desc: '具有创新想法和独特见解的理论家。',
      detail: {
        strengths: ['逻辑思维', '创新能力强', '客观分析', '深度思考', '技术专长'],
        weaknesses: ['执行力不足', '社交能力弱', '可能过于理论化', '时间管理差'],
        careers: ['软件工程师', '数据分析师', '研究员', '哲学家', '数学家', '技术专家', '系统架构师', '学术研究者'],
        workStyle: '喜欢解决复杂问题，追求理论完美，需要独立思考的空间。',
        communication: '精确而深入，喜欢讨论理论问题，可能显得过于抽象。',
        leadership: '技术型领导，善于解决复杂问题，但可能缺乏人际管理能力。'
      }
    },
    'ENTJ': { 
      name: '指挥官', 
      desc: '大胆、富有想象力的强有力领导者，总能找到或创造解决方法。',
      detail: {
        strengths: ['领导能力强', '决策果断', '战略思维', '执行力强', '自信果断'],
        weaknesses: ['可能过于专制', '缺乏耐心', '不善于处理情感', '可能显得傲慢'],
        careers: ['企业高管', '创业家', '项目经理', '投资银行家', '政治领袖', '管理咨询师', '法律专家', '战略总监'],
        workStyle: '天生的领导者，喜欢掌控全局，追求效率和结果。',
        communication: '直接而有力，善于说服他人，但可能显得过于强势。',
        leadership: '强有力且果断的领导者，善于制定目标并推动执行。'
      }
    },
    'ENTP': { 
      name: '辩论家', 
      desc: '聪明好奇的思想家，不会放弃任何智力挑战。',
      detail: {
        strengths: ['创新思维', '适应能力强', '辩论技巧', '多才多艺', '思维敏捷'],
        weaknesses: ['可能缺乏耐心', '执行力不稳定', '可能过于好辩', '注意力分散'],
        careers: ['创业家', '销售专家', '律师', '记者', '营销专家', '创新顾问', '政治分析师', '风险投资家'],
        workStyle: '喜欢挑战和创新，思维敏捷，善于发现新机会。',
        communication: '善于辩论和说服，思维敏捷，但可能显得过于好辩。',
        leadership: '创新型领导，善于激发创意，但可能缺乏系统性管理。'
      }
    },
    'INFJ': { 
      name: '提倡者', 
      desc: '安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。',
      detail: {
        strengths: ['洞察力强', '同理心', '理想主义', '创造力', '直觉敏锐'],
        weaknesses: ['过于理想化', '可能过于敏感', '不善于处理冲突', '可能过度完美主义'],
        careers: ['心理咨询师', '作家', '教师', '人力资源专家', '社工', '艺术工作者', '编辑', '非营利组织工作者'],
        workStyle: '追求意义和价值，善于理解他人，喜欢有创造性的工作。',
        communication: '温和而有深度，善于倾听，但可能不善于表达自己。',
        leadership: '服务型领导，善于激励他人，但可能缺乏果断性。'
      }
    },
    'INFP': { 
      name: '调停者', 
      desc: '诗意、善良的利他主义者，总是热情地为正当理由而努力。',
      detail: {
        strengths: ['创造力', '同理心', '理想主义', '适应性强', '价值观坚定'],
        weaknesses: ['可能过于敏感', '执行力不足', '可能过于理想化', '不善于处理现实问题'],
        careers: ['作家', '艺术家', '心理咨询师', '翻译', '编辑', '社工', '教师', '创意工作者'],
        workStyle: '追求个人价值和意义，喜欢有创造性和人文关怀的工作。',
        communication: '温和而有诗意，善于表达情感，但可能过于理想化。',
        leadership: '温和型领导，善于理解他人，但可能缺乏果断性。'
      }
    },
    'ENFJ': { 
      name: '主人公', 
      desc: '富有魅力和鼓舞人心的领导者，有与生俱来的领导才能。',
      detail: {
        strengths: ['领导能力强', '同理心', '沟通能力', '激励他人', '组织能力'],
        weaknesses: ['可能过于理想化', '可能过度关心他人', '可能缺乏客观性', '可能过度付出'],
        careers: ['人力资源总监', '培训师', '教师', '销售经理', '公关专家', '非营利组织负责人', '咨询师', '团队领导'],
        workStyle: '善于激励和引导他人，喜欢有社会意义的工作。',
        communication: '温暖而有感染力，善于激励他人，但可能过于理想化。',
        leadership: '服务型领导，善于激励团队，但可能缺乏客观性。'
      }
    },
    'ENFP': { 
      name: '竞选者', 
      desc: '热情、有创造力、社交能力强的自由灵魂，总能找到理由微笑。',
      detail: {
        strengths: ['创造力', '适应能力强', '社交能力', '热情', '创新思维'],
        weaknesses: ['可能缺乏耐心', '执行力不稳定', '可能过于情绪化', '注意力分散'],
        careers: ['创意总监', '营销专家', '记者', '演员', '培训师', '创业家', '公关专家', '活动策划师'],
        workStyle: '喜欢创新和变化，善于激发创意，需要自由的工作环境。',
        communication: '热情而有感染力，善于激励他人，但可能过于情绪化。',
        leadership: '创新型领导，善于激发创意，但可能缺乏系统性。'
      }
    },
    'ISTJ': { 
      name: '物流师', 
      desc: '实际且注重事实，可靠性和实用性对他们来说至关重要。',
      detail: {
        strengths: ['责任心强', '执行力强', '注重细节', '可靠', '组织能力强'],
        weaknesses: ['可能过于保守', '缺乏灵活性', '可能过于严格', '不善于处理变化'],
        careers: ['会计师', '审计师', '行政主管', '项目经理', '质量控制专家', '法律助理', '保险专家', '后勤主管'],
        workStyle: '喜欢有序和稳定的工作环境，善于执行和细节管理。',
        communication: '直接而实用，注重事实，但可能显得过于刻板。',
        leadership: '执行型领导，善于管理细节，但可能缺乏创新性。'
      }
    },
    'ISFJ': { 
      name: '守卫者', 
      desc: '非常专注和温暖的守护者，时刻准备保护所爱之人。',
      detail: {
        strengths: ['责任心强', '同理心', '注重细节', '忠诚', '服务意识'],
        weaknesses: ['可能过于保守', '可能过度付出', '不善于处理冲突', '可能缺乏自信'],
        careers: ['护士', '教师', '行政助理', '客户服务', '社工', '图书管理员', '人力资源专员', '医疗助理'],
        workStyle: '喜欢服务他人，注重细节和秩序，需要稳定的工作环境。',
        communication: '温和而关心他人，善于倾听，但可能不善于表达自己。',
        leadership: '服务型领导，善于照顾团队，但可能缺乏果断性。'
      }
    },
    'ESTJ': { 
      name: '总经理', 
      desc: '出色的管理者，在管理事情或管理人的时候无与伦比。',
      detail: {
        strengths: ['组织能力强', '执行力强', '决策果断', '责任心强', '领导能力强'],
        weaknesses: ['可能过于专制', '缺乏灵活性', '可能过于严格', '不善于处理情感'],
        careers: ['企业高管', '项目经理', '运营总监', '销售总监', '生产经理', '财务总监', '人力资源总监', '政府官员'],
        workStyle: '喜欢有序和高效的工作环境，善于管理和执行。',
        communication: '直接而有力，注重效率和结果，但可能显得过于严格。',
        leadership: '强有力且有序的领导者，善于制定规则并执行。'
      }
    },
    'ESFJ': { 
      name: '执政官', 
      desc: '极有同情心、受欢迎的合作者，总是希望帮助别人。',
      detail: {
        strengths: ['社交能力强', '同理心', '组织能力', '责任心强', '服务意识'],
        weaknesses: ['可能过度关心他人', '可能缺乏客观性', '可能过于传统', '可能过度付出'],
        careers: ['人力资源经理', '客户服务经理', '教师', '护士长', '销售经理', '公关经理', '活动策划师', '社区工作者'],
        workStyle: '喜欢与人合作，善于服务他人，需要和谐的工作环境。',
        communication: '温暖而关心他人，善于建立关系，但可能过于情绪化。',
        leadership: '服务型领导，善于照顾团队，但可能缺乏客观性。'
      }
    },
    'ISTP': { 
      name: '鉴赏家', 
      desc: '大胆而实际的实验家，擅长使用各种工具。',
      detail: {
        strengths: ['动手能力强', '逻辑思维', '适应能力强', '冷静', '技术专长'],
        weaknesses: ['可能缺乏耐心', '可能过于独立', '不善于长期规划', '可能显得冷漠'],
        careers: ['技术工程师', '机械师', '飞行员', '运动员', '警察', '消防员', '技术专家', '维修工程师'],
        workStyle: '喜欢动手解决问题，需要独立的工作空间，善于处理危机。',
        communication: '直接而实用，注重事实，但可能显得过于冷静。',
        leadership: '技术型领导，善于解决实际问题，但可能缺乏人际管理。'
      }
    },
    'ISFP': { 
      name: '探险家', 
      desc: '灵活且有魅力的艺术家，随时准备探索和体验新事物。',
      detail: {
        strengths: ['艺术感', '适应能力强', '同理心', '实践能力', '审美能力'],
        weaknesses: ['可能缺乏规划', '可能过于敏感', '不善于长期承诺', '可能缺乏自信'],
        careers: ['设计师', '摄影师', '美容师', '厨师', '园艺师', '艺术工作者', '室内设计师', '时尚顾问'],
        workStyle: '喜欢有创意和美感的工作，需要自由和灵活的环境。',
        communication: '温和而有艺术感，善于表达情感，但可能不善于规划。',
        leadership: '创意型领导，善于激发美感，但可能缺乏系统性。'
      }
    },
    'ESTP': { 
      name: '企业家', 
      desc: '聪明、精力充沛、非常善于感知的人，真正享受冒险。',
      detail: {
        strengths: ['适应能力强', '实践能力强', '社交能力', '冒险精神', '决策果断'],
        weaknesses: ['可能缺乏耐心', '可能过于冲动', '不善于长期规划', '可能缺乏深度'],
        careers: ['创业家', '销售专家', '运动员', '警察', '消防员', '飞行员', '投资顾问', '活动策划师'],
        workStyle: '喜欢挑战和冒险，善于处理危机，需要刺激的工作环境。',
        communication: '直接而有趣，善于社交，但可能显得过于冲动。',
        leadership: '行动型领导，善于处理危机，但可能缺乏长期规划。'
      }
    },
    'ESFP': { 
      name: '表演者', 
      desc: '自发的、精力充沛且热情的表演者，他们的生活永远不缺少乐趣。',
      detail: {
        strengths: ['社交能力强', '热情', '适应能力强', '同理心', '实践能力'],
        weaknesses: ['可能缺乏耐心', '可能过于情绪化', '不善于长期规划', '可能注意力分散'],
        careers: ['演员', '主持人', '销售员', '导游', '活动策划师', '公关专家', '培训师', '客户服务'],
        workStyle: '喜欢与人互动，善于娱乐他人，需要活跃的工作环境。',
        communication: '热情而有感染力，善于社交，但可能显得过于情绪化。',
        leadership: '魅力型领导，善于激励团队，但可能缺乏系统性。'
      }
    }
  };
  
  const result = mbtiInfo[mbtiType] || { 
    name: '未知类型', 
    desc: '这是一个独特的性格类型。',
    detail: {
      strengths: ['待分析'],
      weaknesses: ['待分析'],
      careers: ['待分析'],
      workStyle: '待分析',
      communication: '待分析',
      leadership: '待分析'
    }
  };
  
  document.getElementById('quiz-question').innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: #6a4bc6; margin-bottom: 15px;">🎉 测试完成！</h2>
      <div style="background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: white; padding: 20px; border-radius: 16px; margin: 20px 0;">
        <h3 style="margin: 0 0 10px 0; font-size: 1.5em;">你的MBTI类型：${mbtiType}</h3>
        <p style="margin: 0; font-size: 1.1em;"><strong>${result.name}</strong></p>
      </div>
      <p style="color: #666; line-height: 1.6; font-size: 1.1em; margin-bottom: 20px;">${result.desc}</p>
      <button id="detail-btn" style="background: linear-gradient(90deg, #ff9800, #ffb347); color: #fff; border: none; border-radius: 16px; padding: 12px 32px; font-size: 1.1em; cursor: pointer; margin: 8px;">查看详细分析</button>
    </div>
  `;
  
  // 记录测试结果（如果用户已登录）
  recordTestResult(mbtiType, result.name, result.desc);
  
  // 存储详细结果数据
  window.mbtiDetailResult = {
    type: mbtiType,
    info: result
  };
  
  document.querySelector('.quiz-choices').style.display = 'none';
  document.querySelector('.quiz-detail-choices').style.display = 'none';
  document.getElementById('quiz-footer').innerHTML = ``;
  
  // 绑定详细分析按钮
  document.getElementById('detail-btn').onclick = function() {
    showDetailedAnalysis();
  };
}

// 显示详细分析
function showDetailedAnalysis() {
  const result = window.mbtiDetailResult;
  if (!result) return;
  
  document.getElementById('quiz-question').innerHTML = `
    <div class="detail-content">
      <h2>📊 ${result.type} - ${result.info.name} 详细分析</h2>
      
      <div class="detail-section" style="background: #e8f5e8; border-left-color: #28a745;">
        <h3 style="color: #155724;">💪 核心优势</h3>
        <ul>
          ${result.info.detail.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      
      <div class="detail-section" style="background: #fff3cd; border-left-color: #ffc107;">
        <h3 style="color: #856404;">⚠️ 潜在挑战</h3>
        <ul>
          ${result.info.detail.weaknesses.map(w => `<li>${w}</li>`).join('')}
        </ul>
      </div>
      
      <div class="detail-section" style="background: #d1ecf1; border-left-color: #17a2b8;">
        <h3 style="color: #0c5460;">💼 适合的职业</h3>
        <div class="career-grid">
          ${result.info.detail.careers.map(c => `<div class="career-item">${c}</div>`).join('')}
        </div>
      </div>
      
      <div class="detail-section" style="background: #d4edda; border-left-color: #28a745;">
        <h3 style="color: #155724;">🏢 工作风格</h3>
        <p>${result.info.detail.workStyle}</p>
      </div>
      
      <div class="detail-section" style="background: #e2e3e5; border-left-color: #6c757d;">
        <h3 style="color: #383d41;">💬 沟通方式</h3>
        <p>${result.info.detail.communication}</p>
      </div>
      
      <div class="detail-section" style="background: #f8d7da; border-left-color: #dc3545;">
        <h3 style="color: #721c24;">👑 领导风格</h3>
        <p>${result.info.detail.leadership}</p>
      </div>
      

    </div>
  `;
}

// 绑定详细选项
document.querySelectorAll('.quiz-detail').forEach(btn => {
  btn.onclick = function() {
    nextQuizQuestion(Number(btn.getAttribute('data-score')));
  };
});

// 返回首页
function goBackToHome() {
  document.getElementById('test-select').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'none';
  document.querySelector('.main-card').style.display = 'block';
  // 显示四个动画人物
  document.querySelectorAll('.character-img').forEach(function(img) {
    img.style.display = 'block';
  });
}

// 返回测试选择页面
function goBackToTestSelect() {
  document.getElementById('quiz-page').style.display = 'none';
  document.getElementById('test-select').style.display = 'block';
}

// 进入30题答题页面
document.querySelectorAll('.start-btn-orange')[0].onclick = function() {
  console.log('=== 点击基础版测试按钮 ===');
  document.getElementById('test-select').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'block';
  quizIndex = 0;
  quizAnswers = [];
  currentQuizType = 'basic'; // 确保是基础测试
  console.log('设置测试类型为: basic');
  console.log('重置quizIndex为:', quizIndex);
  console.log('重置quizAnswers为:', quizAnswers);
  verifyQuestionCounts();
  showQuizQuestion();
  // 更新页面标题
  updateQuizTitle();
  console.log('=== 基础版测试初始化完成 ===');
};

// 进入50题答题页面
document.querySelectorAll('.start-btn-orange')[1].onclick = function() {
  console.log('=== 点击进阶版测试按钮 ===');
  document.getElementById('test-select').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'block';
  quizIndex = 0;
  quizAnswers = [];
  currentQuizType = 'advanced'; // 设置为进阶测试
  console.log('设置测试类型为: advanced');
  console.log('重置quizIndex为:', quizIndex);
  console.log('重置quizAnswers为:', quizAnswers);
  verifyQuestionCounts();
  showQuizQuestion();
  // 更新页面标题
  updateQuizTitle();
  console.log('=== 进阶版测试初始化完成 ===');
};

// 进入80题答题页面（专家版）
document.querySelectorAll('.start-btn-orange')[2].onclick = function() {
  console.log('=== 点击专家版测试按钮 ===');
  document.getElementById('test-select').style.display = 'none';
  document.getElementById('quiz-page').style.display = 'block';
  quizIndex = 0;
  quizAnswers = [];
  currentQuizType = 'expert'; // 设置为专家测试
  console.log('设置测试类型为: expert');
  console.log('重置quizIndex为:', quizIndex);
  console.log('重置quizAnswers为:', quizAnswers);
  verifyQuestionCounts();
  showQuizQuestion();
  // 更新页面标题
  updateQuizTitle();
  console.log('=== 专家版测试初始化完成 ===');
};

// 页面加载时验证问题数量
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== 页面加载完成，开始验证问题数量 ===');
  verifyQuestionCounts();
  console.log('=== 页面加载验证完成 ===');
});

// ========== 新增功能实现 ==========

// 显示结果页面
function showResultPage(mbtiType, typeName, typeDesc) {
  document.getElementById('quiz-page').style.display = 'none';
  document.getElementById('result-page').style.display = 'block';
  
  // 更新结果信息
  document.getElementById('mbti-type').textContent = mbtiType;
  document.getElementById('mbti-name').textContent = typeName;
  document.getElementById('mbti-desc').textContent = typeDesc;
  
  // 更新测试统计
  const t = translations[currentLang];
  document.getElementById('test-stats').textContent = `${currentQuizType === 'basic' ? 30 : currentQuizType === 'advanced' ? 50 : 80}题完成`;
  document.getElementById('test-time').textContent = '15分钟'; // 这里可以计算实际用时
  document.getElementById('test-accuracy').textContent = '95%';
}

// 分享结果
function shareResult() {
  document.getElementById('share-dialog').style.display = 'flex';
}

// 关闭分享对话框
function closeShareDialog() {
  document.getElementById('share-dialog').style.display = 'none';
}

// 分享到微信
function shareToWeChat() {
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiName = document.getElementById('mbti-name').textContent;
  const shareText = `我的MBTI类型是${mbtiType}（${mbtiName}），快来测试你的MBTI类型吧！`;
  
  if (navigator.share) {
    navigator.share({
      title: 'MBTI测试结果',
      text: shareText,
      url: window.location.href
    });
  } else {
    // 复制到剪贴板
    navigator.clipboard.writeText(shareText + '\n' + window.location.href);
    alert('分享内容已复制到剪贴板！');
  }
  closeShareDialog();
}

// 分享到QQ
function shareToQQ() {
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiName = document.getElementById('mbti-name').textContent;
  const shareText = `我的MBTI类型是${mbtiType}（${mbtiName}），快来测试你的MBTI类型吧！`;
  
  const qqUrl = `http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(window.location.href)}&title=MBTI测试结果&desc=${encodeURIComponent(shareText)}`;
  window.open(qqUrl, '_blank');
  closeShareDialog();
}

// 分享到微博
function shareToWeibo() {
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiName = document.getElementById('mbti-name').textContent;
  const shareText = `我的MBTI类型是${mbtiType}（${mbtiName}），快来测试你的MBTI类型吧！`;
  
  const weiboUrl = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('MBTI测试结果')}&appkey=`;
  window.open(weiboUrl, '_blank');
  closeShareDialog();
}

// 复制链接
function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('链接已复制到剪贴板！');
  }).catch(() => {
    // 备用方案
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('链接已复制到剪贴板！');
  });
  closeShareDialog();
}

// 显示详细分析
function showDetailedAnalysis() {
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiInfo = getMBTIInfo(mbtiType);
  
  if (mbtiInfo && mbtiInfo.detail) {
    // 更新优势列表
    const strengthsList = document.getElementById('strengths-list');
    strengthsList.innerHTML = mbtiInfo.detail.strengths.map(strength => `<li>${strength}</li>`).join('');
    
    // 更新成长空间列表
    const weaknessesList = document.getElementById('weaknesses-list');
    weaknessesList.innerHTML = mbtiInfo.detail.weaknesses.map(weakness => `<li>${weakness}</li>`).join('');
    
    // 更新职业建议
    const careerSuggestions = document.getElementById('career-suggestions');
    careerSuggestions.innerHTML = mbtiInfo.detail.careers.map(career => `<div class="career-card">${career}</div>`).join('');
    
    // 更新人际关系建议
    const relationshipAdvice = document.getElementById('relationship-advice');
    relationshipAdvice.innerHTML = `<p>${mbtiInfo.detail.workStyle} ${mbtiInfo.detail.communication}</p>`;
  }
  
  document.getElementById('analysis-page').style.display = 'block';
}

// 关闭详细分析
function closeAnalysis() {
  document.getElementById('analysis-page').style.display = 'none';
}

// 导出结果
function exportResult() {
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiName = document.getElementById('mbti-name').textContent;
  const mbtiDesc = document.getElementById('mbti-desc').textContent;
  
  const content = `
MBTI测试结果

类型：${mbtiType}
名称：${mbtiName}
描述：${mbtiDesc}

测试时间：${new Date().toLocaleString('zh-CN')}
测试版本：${currentQuizType === 'basic' ? '基础版' : currentQuizType === 'advanced' ? '进阶版' : '专家版'}

---
MBTI测试网站
${window.location.href}
  `;
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `MBTI测试结果_${mbtiType}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 显示邮件对话框
function showEmailDialog() {
  document.getElementById('email-dialog').style.display = 'flex';
}

// 关闭邮件对话框
function closeEmailDialog() {
  document.getElementById('email-dialog').style.display = 'none';
}

// 发送邮件结果
async function sendEmailResult() {
  const email = document.getElementById('email-input').value.trim();
  
  if (!email) {
    alert('请输入邮箱地址');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('请输入有效的邮箱地址');
    return;
  }
  
  const mbtiType = document.getElementById('mbti-type').textContent;
  const mbtiName = document.getElementById('mbti-name').textContent;
  const mbtiDesc = document.getElementById('mbti-desc').textContent;
  
  try {
    const response = await fetch('/api/send-results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: email,
        testResult: {
          mbtiType: mbtiType,
          typeName: mbtiName,
          typeDesc: mbtiDesc,
          timestamp: new Date().toISOString()
        }
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('测试结果已发送到您的邮箱！');
      closeEmailDialog();
    } else {
      alert('发送失败：' + result.error);
    }
  } catch (error) {
    console.error('发送邮件失败:', error);
    alert('发送失败，请稍后重试');
  }
}

// 重新测试
function retakeTest() {
  document.getElementById('result-page').style.display = 'none';
  document.getElementById('test-select').style.display = 'block';
}



// 获取MBTI信息
function getMBTIInfo(mbtiType) {
  const mbtiInfo = {
    'INTJ': { 
      name: '建筑师', 
      desc: '富有想象力和战略性的思考者，一切都要经过深思熟虑。',
      detail: {
        strengths: ['战略思维', '独立性强', '追求完美', '逻辑分析能力强', '创新思维'],
        weaknesses: ['过于理想化', '不善于表达情感', '可能显得冷漠', '对他人要求过高'],
        careers: ['战略分析师', '投资顾问', '科研人员', '建筑师', '系统分析师', '管理咨询师', '法律顾问', '技术总监'],
        workStyle: '喜欢独立工作，追求系统性和逻辑性，善于制定长期战略。',
        communication: '直接而简洁，重视效率和逻辑，可能显得过于理性。',
        leadership: '天生的战略家，善于制定计划和目标，但可能缺乏情感关怀。'
      }
    },
    // 可以添加更多MBTI类型的信息
  };
  
  return mbtiInfo[mbtiType];
}

// 修改原有的showMBTIResult函数，使其显示新的结果页面
function showMBTIResult(mbtiType) {
  const mbtiInfo = getMBTIInfo(mbtiType);
  if (mbtiInfo) {
    showResultPage(mbtiType, mbtiInfo.name, mbtiInfo.desc);
    recordTestResult(mbtiType, mbtiInfo.name, mbtiInfo.desc);
  }
}