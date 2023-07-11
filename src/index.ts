import './alemon/console.js'
import { createOpenAPI, createWebsocket, IOpenAPI } from 'qq-guild-bot'
import { setLanchConfig, cmdInit } from 'alemon'
import { EventEmitter } from 'ws'
import { checkRobot } from './login.js'
import { createConversation } from './alemon/conversation.js'
import { createConfig, getConfig, DefaultConfigLogin, ConfigLogin } from './config/index.js'
import { setBotConfig } from './alemon/config.js'

declare global {
  //接口对象
  var client: IOpenAPI
  //连接对象
  var ws: EventEmitter
}

let conversation: EventEmitter | null = null

// 导出声明
export * from 'qq-guild-bot'
export function createClient(cfg) {
  return {
    start: () => {
      // 创建 client
      global.client = createOpenAPI(cfg)
      // 创建 websocket
      global.ws = createWebsocket(cfg)
      // 构建插件
      cmdInit()
      // 创建 conversation
      conversation = createConversation()
    },
    stop: () => {
      if (global.client == null || global.ws == null) {
        // 没有启动,即停止失败
        return false
      }
      // 清空 client 和 websocket 实例
      global.client = null
      global.ws = null
      // 停止成功
      return true
    }
  }
}

export async function createAlemon() {
  // 创建配置
  createConfig()
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
  // 设置机器人配置
  setBotConfig(cfg)
  // 创建 client
  global.client = createOpenAPI(cfg)
  // 创建 websocket
  global.ws = createWebsocket(cfg)
  // 构建插件
  cmdInit()
  // 创建 conversation
  createConversation()
}
