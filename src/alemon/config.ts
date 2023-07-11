import { BotConfigType } from 'alemon'
let cfg: BotConfigType = {
  appID: '',
  token: '',
  intents: [],
  isPrivate: false,
  sandbox: false,
  masterID: '',
  password: ''
}
export function getBotConfig(key: string) {
  return cfg[key]
}
export function setBotConfig(val: BotConfigType) {
  cfg = val
  return
}
