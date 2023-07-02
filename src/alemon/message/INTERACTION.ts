import { EventEmitter } from 'ws'
import { AvailableIntentsEventsEnum } from 'qq-guild-bot'
import { typeMessage } from 'alemon'
import { EType, EventType, Messagetype, BotConfigType } from 'alemon'

/* 非依赖引用 */

declare global {
  //连接对象
  var ws: EventEmitter
  //机器人配置
  var cfg: BotConfigType
}

/**
INTERACTION (1 << 26)
  - INTERACTION_CREATE     // 互动事件创建时
 */
export const INTERACTION = () => {
  ws.on(AvailableIntentsEventsEnum.INTERACTION, async (e: Messagetype) => {
    /* 事件匹配 */
    e.event = EType.INTERACTION
    if (new RegExp(/CREATE$/).test(e.eventType)) {
      e.eventType = EventType.CREATE
    } else {
      e.eventType = EventType.DELETE
    }
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
  })
}
