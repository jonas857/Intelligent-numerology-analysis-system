const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'index-zrQHmbv-.js');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  
  // 查找所有包含github.com的行
  const lines = data.split('\n');
  
  console.log('查找包含github.com的内容:');
  lines.forEach((line, index) => {
    if (line.includes('github.com')) {
      console.log(`第 ${index + 1} 行: ${line}`);
    }
  });

  // 专门查找特定链接
  if (data.includes('href:"https://github.com/jonas857/Intelligent-numerology-analysis-system.git"')) {
    console.log('\n找到新链接: href:"https://github.com/jonas857/Intelligent-numerology-analysis-system.git"');
  } else if (data.includes('href:"https://github.com/SmallTeddy/divination"')) {
    console.log('\n找到旧链接: href:"https://github.com/SmallTeddy/divination"');
  } else {
    console.log('\n未找到任何GitHub链接');
  }
} catch (err) {
  console.error('读取文件时出错:', err);
} 