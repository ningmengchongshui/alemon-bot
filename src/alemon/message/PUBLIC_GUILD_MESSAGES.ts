import { EventEmitter } from 'ws'
import { AvailableIntentsEventsEnum } from 'qq-guild-bot'
import { typeMessage } from 'alemon'
import { EType, EventType, Messagetype } from 'alemon'

/* 非依赖引用 */
import { guildMessges } from './GUILD_MESSAGE.js'

declare global {
  //连接对象
  var ws: EventEmitter
}

/**
 PUBLIC_GUILD_MESSAGES (1 << 30) // 消息事件，此为公域的消息事件
 AT_MESSAGE_CREATE       // 当收到@机器人的消息时
 PUBLIC_MESSAGE_DELETE   // 当频道的消息被删除时
 */
export const PUBLIC_GUILD_MESSAGES = () => {
  ws.on(AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES, async (e: Messagetype) => {
    /* 是否是私域：公域 */
    e.isPrivate = false
    if (new RegExp(/DELETE$/).test(e.eventType)) {
      e.event = EType.MESSAGES
      e.eventType = EventType.DELETE
      /* 测回消息：是 */
      e.isRecall = true
      //只匹配类型
      await typeMessage(e)
        .then(() => {
          console.info(`\n[${e.event}] [${e.eventType}]\n${true}`)
          return true
        })
        .catch(err => {
          console.log(err)
          console.info(`\n[${e.event}] [${e.eventType}]\n${false}`)
          return false
        })
      return
    }
    if (new RegExp(/CREATE$/).test(e.eventType)) {
      /* 是否是撤回：不是 */
      e.isRecall = false
      guildMessges(e).catch((err: any) => {
        console.error(err)
        return false
      })
      return
    }
  })
}
