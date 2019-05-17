import axios from 'axios'

class AjaxRequest {
  baseUrl: string
  // baseUrl
  constructor() {
    // 请求路径
    this.baseUrl = process.env.NODE_ENV == 'production' ? 'http://admin.api-test.yizhenjia.com' : 'http://localhost:3000'
  }

  merge(options) {
    let baseUrl = this.baseUrl
    return {...options,baseUrl}
  }

  request(options) {
    let instance = axios.create()
    let config = this.merge(options)
    console.log(config)
    return instance(config)
  }
}

export default new AjaxRequest;