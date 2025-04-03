const fs = require('fs');
const path = require('path');

// 文件路径
const filePath = path.join(__dirname, 'assets', 'index-zrQHmbv-.js');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  
  // 查找旧链接
  const oldLinkPattern = /href:"https:\/\/github\.com\/SmallTeddy\/divination"/;
  const oldLinkMatch = data.match(oldLinkPattern);
  
  // 查找新链接
  const newLinkPattern = /href:"https:\/\/github\.com\/jonas857\/Intelligent-numerology-analysis-system\.git"/;
  const newLinkMatch = data.match(newLinkPattern);
  
  console.log('查找结果：');
  console.log('旧链接存在：', !!oldLinkMatch);
  console.log('新链接存在：', !!newLinkMatch);
  
  if (newLinkMatch) {
    console.log('链接已成功替换！新链接：', newLinkMatch[0]);
  } else if (oldLinkMatch) {
    console.log('替换尚未完成，仍然存在旧链接：', oldLinkMatch[0]);
  } else {
    console.log('未找到任何GitHub相关链接');
    
    // 尝试搜索更一般的 GitHub 链接
    const anyGithubPattern = /href:"https:\/\/github\.com\/[^"]+"/g;
    const allGithubLinks = data.match(anyGithubPattern);
    
    if (allGithubLinks && allGithubLinks.length > 0) {
      console.log('找到的所有GitHub链接：');
      allGithubLinks.forEach(link => console.log(' - ' + link));
    }
  }
} catch (err) {
  console.error('读取文件时出错:', err);
} 