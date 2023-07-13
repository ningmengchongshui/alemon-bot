import { BotConfigType, setLanchConfig, cmdInit } from 'alemon'
import { callBack } from './alemon/conversation.js'
import { checkRobot } from './login.js'
import { DefaultConfigLogin, ConfigLogin, PuppeteerConfig, MysConfig } from './config/index.js'
import { createClient, Client } from 'mys-villa'

declare global {
  //机器人配置
  var cfg: BotConfigType
  var client: any
}

export async function createAlemon() {
  // 设置浏览器配置
  setLanchConfig(PuppeteerConfig)

  // 登录
  global.cfg = await checkRobot(
    DefaultConfigLogin,
    ConfigLogin,
    process.argv[2] == 'login' ? 0 : 1
  ).catch(err => {
    console.log(err)
    process.exit()
  })

  // 加载插件
  await cmdInit().catch(err => {
    console.log(err)
    return
  })
  /* 创建应用程序 */
  createClient(
    {
      bot_id: cfg.appID,
      bot_secret: cfg.token,
      callback_url: MysConfig.url,
      callback_host: MysConfig.host
    },
    callBack,
    async () => {
      console.info('[HELLO] 欢迎使用Alemon-Mys')
    }
  )
  const ip = await Client.getIP()
  if (ip) {
    console.info(`[OPEN] http://${ip}:${MysConfig.host}${MysConfig.url}`)
  } else {
    console.log('公网IP识别失败~暂无法支持运行')
  }
  return true
}
