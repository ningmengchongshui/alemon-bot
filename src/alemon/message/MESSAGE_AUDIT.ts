import { typeMessage } from 'alemon'
import { EType, EventType, Messagetype } from 'alemon'

/**
MESSAGE_AUDIT (1 << 27)
- MESSAGE_AUDIT_PASS     // 消息审核通过
- MESSAGE_AUDIT_REJECT   // 消息审核不通过
 */
export const MESSAGE_AUDIT = async (e: Messagetype) => {
  /* 事件匹配 */
  e.event = EType.MESSAGE_AUDIT
  if (new RegExp(/PASS$/).test(e.eventType)) {
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
}
