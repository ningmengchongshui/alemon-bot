import { SessionEvents, AvailableIntentsEventsEnum } from 'qq-guild-bot'
/* 监听消息 */
import { GUILDS } from './message/GUILDS.js'
import { GUILD_MEMBERS } from './message/GUILD_MEMBERS.js'
import { DIRECT_MESSAGE } from './message/DIRECT_MESSAGE.js'
import { PUBLIC_GUILD_MESSAGES } from './message/PUBLIC_GUILD_MESSAGES.js'
import { GUILD_MESSAGE_REACTIONS } from './message/GUILD_MESSAGE_REACTIONS.js'
import { OPEN_FORUMS_EVENT } from './message/OPEN_FORUMS_EVENT.js'
import { GUILD_MESSAGES } from './message/GUILD_MESSAGES.js'
import { INTERACTION } from './message/INTERACTION.js'
import { MESSAGE_AUDIT } from './message/MESSAGE_AUDIT.js'
import { AUDIO_ACTION } from './message/AUDIO_ACTION.js'
import { FORUMS_EVENT } from './message/FORUMS_EVENT.js'
import { getBotConfig } from './config'
/**
 * ws.on方法可以监听机器人所在频道的所有事件
 * 根据其e.eventType，判断出事件的具体类型
 */
export const createConversation = ws => {
  /** 准备 */
  ws.on(SessionEvents.READY, async bot => {
    const sandbox = getBotConfig('sandbox')
    if (sandbox) console.info('[READY]', bot)
    /* 记录机器人信息 */
    const robot = bot.msg
    /* 基础权限 */
    //机器人进出频道消息
    ws.on(AvailableIntentsEventsEnum.GUILDS, GUILDS)

    //成员频道进出变动消息
    ws.on(AvailableIntentsEventsEnum.GUILD_MEMBERS, GUILD_MEMBERS)

    //私聊会话消息
    ws.on(AvailableIntentsEventsEnum.DIRECT_MESSAGE, DIRECT_MESSAGE)

    //频道会话消息（公域）
    ws.on(AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES, PUBLIC_GUILD_MESSAGES)

    /* 需申请权限 */
    //频道会话消息（私域）
    ws.on(AvailableIntentsEventsEnum.GUILD_MESSAGES, GUILD_MESSAGES)

    //论坛消息（私域）
    ws.on(AvailableIntentsEventsEnum.FORUMS_EVENT, FORUMS_EVENT)

    //论坛消息（公域）
    ws.on('OPEN_FORUMS_EVENT', OPEN_FORUMS_EVENT)

    //频道表情点击会话消息
    ws.on(AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS, GUILD_MESSAGE_REACTIONS)

    //互动事件监听
    ws.on(AvailableIntentsEventsEnum.INTERACTION, INTERACTION)
    ws.on(AvailableIntentsEventsEnum.MESSAGE_AUDIT, MESSAGE_AUDIT)

    //审核事件监听
    ws.on(AvailableIntentsEventsEnum.AUDIO_ACTION, AUDIO_ACTION)
    console.info('[READY]', ` 欢迎回来 ${robot.user.username}`)
  })

  /** 权限错误 */
  ws.on(SessionEvents.ERROR, (one: any) => {
    console.error('[ERROR]', one)
  })

  /**  超长断连 */
  ws.on(SessionEvents.DEAD, (one: any) => {
    console.error('DEAD', one)
    console.error('请确认配置！')
    console.error('账户密码是否正确？')
    console.error('域事件是否匹配？')
  })

  /* 关闭 */
  ws.on(SessionEvents.CLOSED, (one: any) => {
    console.error('[CLOSED]', one)
  })

  /** 断开连接 */
  ws.on(SessionEvents.DISCONNECT, (one: any) => {
    console.error('[DISCONNECT]', one)
  })

  /* 无效会话 */
  ws.on(SessionEvents.INVALID_SESSION, (one: any) => {
    console.error('[INVALID_SESSION]', one)
  })

  /* 再连接 */
  ws.on(SessionEvents.RECONNECT, (one: any) => {
    console.error('[RECONNECT]', one)
  })

  /* 重新开始 */
  ws.on(SessionEvents.RESUMED, (one: any) => {
    console.error('[RESUMED]', one)
  })

  /* WS断连 */
  ws.on(SessionEvents.EVENT_WS, async one => {
    if (one.eventType == 'DISCONNECT') {
      console.info('[EVENT_WS][DISCONNECT]', one)
    }
  })
}
