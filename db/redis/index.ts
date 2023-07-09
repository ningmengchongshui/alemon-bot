import { ALRedis } from 'alemon-redis'
// redis连接示例demo
ALRedis.set('alemon-plugin', 'alemon-redis OK')
const val = await ALRedis.get('alemon-plugin').catch(err => {
  console.log(err)
  return false
})
console.log(val)
