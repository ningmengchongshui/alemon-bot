import{_ as s,o as a,c as t,V as n}from"./chunks/framework.ee7253e8.js";const _=JSON.parse('{"title":"功能体验","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"root/examples/api/test.md","filePath":"root/examples/api/test.md"}'),e={name:"root/examples/api/test.md"},l=n(`<h1 id="功能体验" tabindex="-1">功能体验 <a class="header-anchor" href="#功能体验" aria-label="Permalink to &quot;功能体验&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>推荐开发者根据源码学习如何实现一些高级功能</p></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- alemon-plugn/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- apps/         应用文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- db/           数据层</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- local/       本地数据读取</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- mysql/       数据库连接</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- redis/       redis连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- lib/          工程包</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- models/       数据库模型</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- resources/    资源包</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- assets/      静态数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- defset/      默认配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        |-- html/        静态网页</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- api.ts        插件接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- app.config.ts 路径配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- index.ts      导出入口</span></span></code></pre></div><h2 id="指令测试" tabindex="-1">指令测试 <a class="header-anchor" href="#指令测试" aria-label="Permalink to &quot;指令测试&quot;">​</a></h2><p>功能测试指令,可发送体验实际效果</p><p>因插件会不断升级,文档指令可能更新不及时</p><p>实际指令可查看 apps 应用文件夹</p><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td>/柠檬帮助</td><td>把 html 渲染后截图,并回复发送</td></tr><tr><td>/百度一下</td><td>把 uri 地址转换为二维码发送</td></tr><tr><td>/你好呀</td><td>对话机锁定效果,拥有前后文记录</td></tr><tr><td>/你得意什么</td><td>让机器人对消息进行表态</td></tr><tr><td>/原神黄历</td><td>把 uri 链接图片发送出来</td></tr><tr><td>/数组信息</td><td>区别于字符消息用的数组格式消息</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>公域机器人必须@后才能触发指令</p></div>`,10),p=[l];function o(c,r,i,d,C,A){return a(),t("div",null,p)}const m=s(e,[["render",o]]);export{_ as __pageData,m as default};
