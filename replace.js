const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'index-zrQHmbv-.js');
let content = fs.readFileSync(filePath, 'utf8');

// 使用正则表达式查找和替换链接
const replacedContent = content.replace(/href:"https:\/\/github\.com\/SmallTeddy\/divination"/g, 
                                      'href:"https://github.com/jonas857/Intelligent-numerology-analysis-system.git"');

// 写回文件
fs.writeFileSync(filePath, replacedContent, 'utf8');

console.log('替换完成!');
