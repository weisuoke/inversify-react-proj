import { provide, TYPES } from "../ioc/ioc";
import * as fetch from "node-fetch";
import { ISafeRequest } from "../interface/ISafeRequest";
import config from "../config";

@provide(TYPES.SafeRequest)
class SafeRequest implements ISafeRequest {
  public async fetch(
    url: string,
    arg?: Object,
    callback?: Function
  ): Promise<Object> {
    console.log(url, config);
    let requestUrl = config.baseURL + url;
    let result = {
      code: "error"
    };
    let headers = {
      "content-type": "application/x-www-form-urlencoded",
      "Content-Length": 20,
      appkey: "test_admin_123",
      source: "shangjia",
      appsecret: "917321189",
      token: "5eaf3bf4253256a987ee2c5de2d25427",
      uid: 4
    };

    arg = Object.assign({}, {headers}, arg)

    console.log(arg)

    await fetch(requestUrl, arg)
      .then(res => res.json())
      .then(json => (result = json));
    return result;
  }
}
