import { readFileSync, watch, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createHash } from 'crypto'
import prompts from 'prompts'
// 非依赖引用
import { BotConfigType, AvailableIntentsEventsEnum } from 'alemon'
import { getYaml } from 'alemon'

let cfg: BotConfigType

/**
 * 监听登录
 * @param val
 * @param text1
 * @param text2
 */
function watchLogin(val: string, text1: string, text2: string) {
  console.log(text1)
  watch(val, async () => {
    setTimeout(async () => {
      const configA = getYaml(val)
      configA.masterID = null
      const configB = cfg
      configB.masterID = null
      if ((configA ?? '') === '' || JSON.stringify(configB) !== JSON.stringify(configA)) {
        console.error(text2)
        process.exit()
      }
    }, 500)
  })
}

/**
 * 登录配置
 * @param Dcf
 * @param Bcf
 * @param val
 * @returns
 */
export async function checkRobot(Dcf: string, Bcf: string, val?: number): Promise<BotConfigType> {
  const config: BotConfigType = getYaml(join(process.cwd(), Bcf))
  if (
    (config ?? '') !== '' &&
    (config.appID ?? '') !== '' &&
    (config.token ?? '') !== '' &&
    (config.secretKey ?? '') !== '' &&
    val !== 0
  ) {
    if (!config.intents) {
      config.intents = [
        AvailableIntentsEventsEnum.GUILDS,
        AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES,
        AvailableIntentsEventsEnum.DIRECT_MESSAGE,
        AvailableIntentsEventsEnum.GUILD_MEMBERS
      ]
    }
    config.masterID = createHash('sha256').update(config.appID).digest('hex')
    cfg = config
  } else {
    console.info('[LOGIN]', '-----------------------')
    console.info('[LOGIN]', '推荐将机器人设置', '订阅推送', '打开')
    console.info('[LOGIN]', '推荐将机器人设置', '私聊权限', '打开')
    console.info('[LOGIN]', '非管理类机器推荐', '普通成员', '身份')
    console.info('[LOGIN]', '-----------------------')
    console.info('[LOGIN]', '退出重来？可按', '[CTRL+C]')
    console.info('[LOGIN]', '更改登录？执行', 'npm run login')
    console.info('[LOGIN]', '-----------------------')
    console.info('[LOGIN]', '现在,请先根据指令提示输入基础信息')
    console.info('[LOGIN]', '-----------------------')

    const { appID, token, imputPwd, inputBot, imputDev } = await prompts([
      {
        type: 'password',
        name: 'appID',
        message: '机器人 appID: ',
        validate: value => (value !== '' && typeof value === 'string' ? true : '机器人 appID: ')
      },
      {
        type: 'password',
        name: 'token',
        message: '机器人 token: ',
        validate: value => (value !== '' && typeof value === 'string' ? true : '机器人 token: ')
      },
      {
        type: 'password',
        name: 'imputPwd',
        message: '自定义 secretKey: ',
        validate: value =>
          /^[A-Za-z0-9]{6,16}$/.test(value) ? true : '密码必须是 6 到 16 个字符的字母和数字组合'
      },
      {
        type: 'select',
        name: 'inputBot',
        message: '请选择机器人类型 :',
        choices: [
          { title: '公域', value: '0' },
          { title: '私域', value: '1' }
        ],
        initial: 0 //默认公域
      },
      {
        type: 'select',
        name: 'imputDev',
        message: '请选择机器人环境 :',
        choices: [
          { title: '部署环境', value: '0' },
          { title: '开发环境', value: '1' }
        ],
        initial: 0 //默认部署
      }
    ]).catch(err => {
      console.log(err)
      process.exit()
    })

    if (!appID || !token || !imputPwd || !inputBot || !imputDev) process.exit()

    const secretKey = createHash('sha256').update(`${appID}:${imputPwd}`).digest('hex')

    //默认公域机器人
    let intents = [
      AvailableIntentsEventsEnum.GUILDS, //频道进出
      AvailableIntentsEventsEnum.GUILD_MEMBERS, //成员资料
      AvailableIntentsEventsEnum.DIRECT_MESSAGE, //私信
      //公域特有
      AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES //公域事件
      // OPEN_FORUMS_EVENT //公域论坛
    ]

    //私域机器人
    if (inputBot == '1') {
      intents = [
        AvailableIntentsEventsEnum.GUILDS, //频道进出
        AvailableIntentsEventsEnum.GUILD_MEMBERS, //成员资料
        AvailableIntentsEventsEnum.DIRECT_MESSAGE, //私信
        //需申请的
        AvailableIntentsEventsEnum.AUDIO_ACTION, //音频
        AvailableIntentsEventsEnum.MESSAGE_AUDIT, //消息审核
        AvailableIntentsEventsEnum.INTERACTION, //互动事件
        AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS, //表情表态
        //私域特有
        AvailableIntentsEventsEnum.GUILD_MESSAGES, //私域事件
        AvailableIntentsEventsEnum.FORUMS_EVENT //私域论坛
      ]
    }

    let sandbox = false

    if (imputDev == '1') sandbox = true

    let str = readFileSync(Dcf, 'utf-8')

    str = str.replace(/appID: ""/g, `appID: '${appID}'`)
    str = str.replace(/token: ""/g, `token: '${token}'`)
    str = str.replace(/secretKey: ""/g, `secretKey: '${secretKey}'`)
    str = str.replace(/intents:\s*\[\s*\]/g, `intents: [${intents}]`)
    str = str.replace(/sandbox:\s*false/g, `sandbox: ${sandbox}`)

    // 确保目录存在
    mkdirSync(dirname(join(process.cwd(), Bcf)), { recursive: true })

    // 写入内容
    writeFileSync(join(process.cwd(), Bcf), str)

    console.info('[CTRETE]', join(process.cwd(), Bcf))

    cfg = {
      appID,
      token,
      intents,
      sandbox,
      secretKey,
      masterID: createHash('sha256').update(appID).digest('hex')
    }
  }
  watchLogin(join(process.cwd(), Bcf), '[WARCH] 配置监听启动', '[WARCH] 请重启!')
  return cfg
}
