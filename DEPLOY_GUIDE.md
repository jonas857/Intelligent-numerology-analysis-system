# 命理分析系统部署指南

## 系统要求
- Windows 7/10/11 系统
- 支持HTML5的现代浏览器（Chrome, Firefox, Edge等）
- 建议使用1920x1080或更高分辨率显示器

## 部署步骤

### 方法一：使用本地Web服务器（推荐）

1. 下载并安装 [XAMPP](https://www.apachefriends.org/download.html) 或 [WampServer](https://www.wampserver.com/en/download-wampserver-64bits/)
   
2. 解压 `divination-bazi.zip` 文件到服务器的Web根目录
   - XAMPP: 通常是 `C:\xampp\htdocs\divination-bazi`
   - WampServer: 通常是 `C:\wamp64\www\divination-bazi`

3. 启动Apache服务
   - XAMPP: 打开XAMPP控制面板，点击Apache旁边的"Start"按钮
   - WampServer: 启动WampServer，确保Apache服务运行中

4. 在浏览器中访问应用
   - 打开浏览器，输入 `http://localhost/divination-bazi`

### 方法二：直接打开HTML文件（简单但有限制）

1. 解压 `divination-bazi.zip` 文件到任意目录

2. 在文件夹中找到 `index.html` 文件，使用现代浏览器（如Chrome, Firefox, Edge）打开

3. 注意：由于浏览器的安全限制，某些功能在直接打开文件的方式下可能无法正常工作

### 方法三：使用Live Server插件（开发者友好）

1. 下载并安装 [Visual Studio Code](https://code.visualstudio.com/)

2. 安装 Live Server 扩展
   - 打开VS Code
   - 点击左侧的扩展图标
   - 搜索"Live Server"并安装

3. 解压 `divination-bazi.zip` 文件到任意目录

4. 在VS Code中打开解压后的目录
   - 点击右下角的"Go Live"按钮
   - 或右键点击 `index.html` 文件，选择"Open with Live Server"

## 常见问题

### 如何更新系统
下载新版本的 `divination-bazi.zip`，按照上述部署步骤重新部署即可覆盖旧版本。

### 数据存储在哪里
本系统数据存储在浏览器的本地存储中。如需备份数据，请使用系统中的导出功能。

### 遇到"Cannot GET /"错误
确保访问的URL是完整路径，例如 `http://localhost/divination-bazi/index.html`。

### 应用无法保存数据
确保浏览器允许使用 localStorage，并且没有开启隐私模式。

## 技术支持
如有任何技术问题，请联系系统管理员或发送邮件至支持团队。 