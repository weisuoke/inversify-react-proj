import {IShop} from '../interface/IShop'
import {provide, TYPES, TAGS, inject} from '../ioc/ioc'

@provide(TAGS.ShopService)
export class ShopService implements IShop {
  private safeRequest;
  constructor(@inject(TYPES.SafeRequest) safeRequest){
    this.safeRequest = safeRequest;
  }
  public query<T>(): Promise<T> {
    let result
    console.log("🍎", this.safeRequest)
    result = this.safeRequest.fetch("/shop/query", {method: 'post'}, function() {})
    return result
  }
}