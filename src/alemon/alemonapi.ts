import { createReadStream } from 'node:fs'
import { Readable } from 'node:stream'
import FormData from 'form-data'
import axios from 'axios'

/** 环境配置 */
const Acf = {
  sandbox_api: 'https://sandbox.api.sgroup.qq.com',
  api: 'https://api.sgroup.qq.com'
}

/**
 * 得到环境api
 * @returns
 */
function getUrl(sandbox: boolean): string {
  //沙箱环境
  if (sandbox) return Acf.sandbox_api
  //正式环境
  return Acf.api
}

/**
 * 发送本地路径的图片
 * @param id 私信传频道id,公信传子频道id
 * @param message {消息编号,图片,内容}
 * @param isGroup 是否是群聊
 * @returns
 */
export async function sendImage(
  message: {
    id: string
    msg_id: string
    file_image: string | Buffer | URL
    isGroup: boolean
    content?: string
  },
  cfg: {
    appID: string
    token: string
    sandbox: boolean
  }
): Promise<any> {
  const urlbase = getUrl(cfg.sandbox)

  /** 读取本地图片地址 */
  const picData = createReadStream(message.file_image)

  /* 请求数据包 */
  const formdata = new FormData()
  formdata.append('msg_id', message.msg_id)
  if (typeof message.content === 'string') formdata.append('content', message.content)
  formdata.append('file_image', picData)

  let url = ''
  if (!message.isGroup) {
    url = `${urlbase}/dms/${message.id}/messages`
  } else {
    url = `${urlbase}/channels/${message.id}/messages`
  }

  /* 采用请求方式发送数据 */
  return await axios({
    method: 'post',
    url,
    headers: {
      'Content-Type': formdata.getHeaders()['content-type'],
      'Authorization': `Bot ${cfg.appID}.${cfg.token}`
    },
    data: formdata
  }).catch(err => err)
}

/**
 * 发送buffer图片
 * @param id 私信传频道id,公信传子频道id
 * @param message {消息编号,图片,内容}
 * @param isGroup 是否是群聊
 * @returns
 */
export async function postImage(
  message: {
    id: string
    msg_id: string
    file_image: string | Buffer | URL
    isGroup: boolean
    content?: string
  },
  cfg: {
    appID: string
    token: string
    sandbox: boolean
  }
): Promise<any> {
  // 得到环境
  const urlbase = getUrl(cfg.sandbox)
  /* 创建可读流对象 */
  const picData = new Readable()
  picData.push(message.file_image)
  picData.push(null)

  /* 构建请求数据包 */
  const formdata = new FormData()
  formdata.append('msg_id', message.msg_id)
  if (typeof message.content === 'string') formdata.append('content', message.content)
  formdata.append('file_image', picData, {
    filename: 'image.jpg', // 为上传的图片指定文件名，可以根据实际情况修改
    contentType: 'image/jpeg' // 指定上传的图片类型，可以根据实际情况修改
  })

  let url = ''
  if (!message.isGroup) {
    url = `${urlbase}/dms/${message.id}/messages`
  } else {
    url = `${urlbase}/channels/${message.id}/messages`
  }

  /* 采用请求方式发送数据 */
  return await axios({
    method: 'post',
    url,
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formdata.getBoundary()}`,
      'Authorization': `Bot ${cfg.appID}.${cfg.token}`
    },
    data: formdata
  }).catch(err => err)
}
