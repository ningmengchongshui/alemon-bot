import { villaService } from 'mys-villa'
export async function transferImage(villa_id: number, url: string) {
  const ret: string | false = await villaService(villa_id, {
    method: 'post',
    url: '/vila/api/bot/platform/transferImage',
    data: {
      url
    }
  })
    .then(res => {
      // axiso
      const re = res.data
      // mys
      return re.data
    })
    .catch(err => {
      console.log(err)
      return false
    })
  console.log('transferImage', ret)
  return ret
}
