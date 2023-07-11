import './alemon/console.js'
import { createOpenAPI, createWebsocket, IOpenAPI } from 'qq-guild-bot'
import { setLanchConfig, cmdInit } from 'alemon'
import { checkRobot } from './login.js'
import { createConversation } from './alemon/conversation.js'
import { createConfig, getConfig, DefaultConfigLogin, ConfigLogin } from './config/index.js'
import { setBotConfig } from './alemon/config.js'

declare global {
  //接口对象
  var clientApi: IOpenAPI
  //连接对象
}

export function createClient(cfg) {
  // 设置机器人配置
  setBotConfig(cfg)
  // 创建 clientApi
  global.clientApi = createOpenAPI(cfg)
  // 创建 websocket
  const WsClient = createWebsocket(cfg)
  // 构建插件
  cmdInit()
  // 加载会话监听
  createConversation(WsClient)
  return {
    WsClient,
    // 关闭连接
    stop: () => {
      if (!global.clientApi) {
        return false
      }
      // 删除
      delete global.clientApi
      // 关闭
      WsClient.disconnect()
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
  // 创建 clientApi
  global.clientApi = createOpenAPI(cfg)
  // 创建 websocket
  const WebsocketClient = createWebsocket(cfg)
  // 构建插件
  cmdInit()
  // 创建 conversation
  createConversation(WebsocketClient)
}

// 导出声明
export * from 'qq-guild-bot'
