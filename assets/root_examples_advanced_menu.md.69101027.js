import{_ as s,o as n,c as a,V as l}from"./chunks/framework.ee7253e8.js";const m=JSON.parse('{"title":"整体结构","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"root/examples/advanced/menu.md","filePath":"root/examples/advanced/menu.md"}'),p={name:"root/examples/advanced/menu.md"},e=l(`<h1 id="整体结构" tabindex="-1">整体结构 <a class="header-anchor" href="#整体结构" aria-label="Permalink to &quot;整体结构&quot;">​</a></h1><h2 id="alemon-bot" tabindex="-1">Alemon-bot <a class="header-anchor" href="#alemon-bot" aria-label="Permalink to &quot;Alemon-bot&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- .vscode/  编辑器配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- config/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- mysql.yaml     mysql配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- redis.yaml     redis配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- login.yaml     登录配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- puppeteer.yaml 浏览器配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- data/     临时数据</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- example/  简单插件(example)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- plugins/  工程插件(plugins)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .prettierrc.json 代码风格</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .puppeteerrc.js  浏览器配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- index.ts         应用入口</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- nodemon.json     热开发配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package.json     工程管理</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- pm2-run2.js      编译启动</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- pm2.json    性能均能</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.ts      TS配置</span></span></code></pre></div><h2 id="alemon-qq" tabindex="-1">Alemon-qq <a class="header-anchor" href="#alemon-qq" aria-label="Permalink to &quot;Alemon-qq&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- src/   浏览器缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- alemon/         封装对接</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- config/         配置对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- default/        默认配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- index.ts        启动入口</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- login.ts        登录逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- types/           类型一览</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .gitignore       推送控制</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmignore       包推送控制</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmrc           包管理配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package.json     项目配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.ts      TS配置</span></span></code></pre></div><h2 id="alemon" tabindex="-1">Alemon <a class="header-anchor" href="#alemon" aria-label="Permalink to &quot;Alemon&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- lib/   浏览器缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- api.js         特殊接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- apps.js        应用加载</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- config.js      配置管理</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- dealmsg.js     消息处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- dialogue.js    对话机</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- emoji.js       表情对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- exec.js        指令方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- index.js       依赖入口</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- message.js     消息管理</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- permissions.js 权限鉴别</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- plugin.js      插件控制</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- puppeteer.js   浏览器控制</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- qq-types.js    原始类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- qrcode.js      二维码</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- screenshot.js  截图缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- segment.js     快捷对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- types.js       类型管理</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- types/           类型一览</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .gitignore       推送控制</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmignore       包推送控制</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmrc           包管理配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- doc              文档笔记</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.ts      TS配置</span></span></code></pre></div>`,7),o=[e];function c(t,i,r,A,C,y){return n(),a("div",null,o)}const D=s(p,[["render",c]]);export{m as __pageData,D as default};
