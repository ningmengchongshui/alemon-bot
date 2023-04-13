<h1 align="center">
 <span> Alemon-Bot</span> 
<a  href='https://github.com/ningmengchongshui/alemon-bot/stargazers'>

[![](https://profile-counter.glitch.me/alemon-bot/count.svg)](https://gitee.com/ningmengchongshui/alemon-bot)

Node.js>=V16

[☞ 参考文档](./README_.md)

Windows/Linux,Node.js,Redis,Sequelize

</a>
</h1>

## 频道机器人

## 起步

拉取代码

```
#github
git clone --depth=1 https://github.com/ningmengchongshui/alemon-bot.git
#gitee
git clone --depth=1 https://gitee.com/ningmengchongshui/alemon-bot.git
```

加载依赖

```
cd alemon-bot
npm install
```

## 运行

#### 脚本运行 1 登录验证

```
npm run start  #前台运行
```
#### 后台运行 2 负载均衡

```
npm install pm2 -g #安装pm2全局
```

```
npm run pm2 #后台运行

```

```
pm2 log #打印后台记录
```

## linux

puppeteer 环境

#### centos

```
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y && yum install libdrm libgbm libxshmfence -y && yum install nss -y && yum update nss -y;
```

安装中文字体

```
yum groupinstall fonts -y
```

#### ubuntu

## 友情链接

官方代码包[☞SDK](https://github.com/tencent-connect/bot-node-sdk)

官方开发文档[☞API](https://bot.q.qq.com/wiki/develop/nodesdk/guild/guilds.html)

函数名命名部分借鉴于 oicq/icqq

插件设计思想借鉴于 Yunzai-Bot
