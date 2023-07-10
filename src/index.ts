import './alemon/console.js'
import { createOpenAPI, createWebsocket, IOpenAPI } from 'qq-guild-bot'
import { setLanchConfig } from 'alemon'
import { EventEmitter } from 'ws'
import { checkRobot } from './login.js'
import { createConversation } from './alemon/conversation.js'
import { startConfig, getConfig, DefaultConfigLogin, ConfigLogin } from './config/index.js'

declare global {
  //接口对象
  var client: IOpenAPI
  //连接对象
  var ws: EventEmitter
}

export async function createAlemon() {
  // 创建配置
  startConfig()
  // 读取配置
  const { PuppeteerConfig } = getConfig()
  // 设置浏览器配置
  setLanchConfig(PuppeteerConfig)
  //  登录
  const cfg = await checkRobot(
    DefaultConfigLogin,
    ConfigLogin,
    process.argv[2] == 'login' ? 0 : 1
  ).catch(err => {
    console.log(err)
    process.exit()
  })
  // 创建 client
  global.client = createOpenAPI(cfg)
  // 创建 websocket
  global.ws = createWebsocket(cfg)
  // 创建 conversation
  createConversation(cfg)
}

// 导出声明
export * from 'alemon/types'
export * from 'qq-guild-bot/typings'
export function createClient() {
  return {
    createOpenAPI,
    createWebsocket,
    createConversation,
    startConfig,
    getConfig,
    setLanchConfig,
    checkRobot
  }
}
