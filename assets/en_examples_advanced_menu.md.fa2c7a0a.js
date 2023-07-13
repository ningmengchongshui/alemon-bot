import{_ as s,o as n,c as a,V as e}from"./chunks/framework.ee7253e8.js";const y=JSON.parse('{"title":"Overall structure","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en/examples/advanced/menu.md","filePath":"en/examples/advanced/menu.md"}'),l={name:"en/examples/advanced/menu.md"},p=e(`<h1 id="overall-structure" tabindex="-1">Overall structure <a class="header-anchor" href="#overall-structure" aria-label="Permalink to &quot;Overall structure&quot;">​</a></h1><h2 id="alemon-bot" tabindex="-1">Alemon-bot <a class="header-anchor" href="#alemon-bot" aria-label="Permalink to &quot;Alemon-bot&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- .vscode/  editor Configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- config/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- mysql.yaml      mysql configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- redis.yaml      redis configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- login.yaml      Login Configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- puppeteer.yaml  Browser Configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- data/     temporary data</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- example/  Simple plugin(example)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- plugins/  Engineering plugin(plugins)</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .prettierrc.json  Coding Style</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .puppeteerrc.js   Browser Configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- index.ts          Application portal</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- nodemon.json      Hot development configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- package.json      engineering management</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- pm2-run2.js       Compile Start</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- pm2.json     Performance Equalization</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.ts       TS configuration</span></span></code></pre></div><h2 id="alemon-qq" tabindex="-1">Alemon-qq <a class="header-anchor" href="#alemon-qq" aria-label="Permalink to &quot;Alemon-qq&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- src/           Browser Cache</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- Alemon/       Packaging docking</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- Config/       Configuration Object</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- Default/      default configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|    -- Index.ts      Start Entry</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- Login.ts      login logic</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- Types/        List of Types</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .gitignore      push control</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npignore       package push control</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmrc package  management configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Package. json   project configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Tsconfig.ts     TS Configuration</span></span></code></pre></div><h2 id="alemon" tabindex="-1">Alemon <a class="header-anchor" href="#alemon" aria-label="Permalink to &quot;Alemon&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|-- lib/   engineering files</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- api.js         special interface</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- apps.js        application loading</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- config.js      configuration management</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- dealmsg.js     message processing</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- dialogue.js    intercom</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- emoji.js       emoji object</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- exec.js        instruction method</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- index.js       Dependency Entry</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- login.js       login management</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- message.js     message management</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- permissions.js permission authentication</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- plugin.js      plugin control</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- puppeteer.js   Browser Control</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- qq-types.js    primitive type</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- qrcode.js      QR code</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- screenshot.js  screenshot cache</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- segment.js     Shortcut Object</span></span>
<span class="line"><span style="color:#A6ACCD;">    |-- types.js       type management</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- types/           List of Types</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .gitignore       push control</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmignore       package push control</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- .npmrc           package management configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- doc              document notes</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- tsconfig.ts      TS Configuration</span></span></code></pre></div>`,7),o=[p];function t(c,i,r,C,A,g){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{y as __pageData,u as default};
