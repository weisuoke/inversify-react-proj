import {
  controller,
  interfaces,
  Router,
  httpGet,
  inject,
  provideThrowable,
  TYPE,
  TAGS
} from "../ioc/ioc";

@controller("/shop")
@provideThrowable(TYPE.Controller, "ShopController")
export default class ShopController implements interfaces.Controller {
  private shopService
  constructor(@inject(TAGS.ShopService) ShopService) {
    this.shopService = ShopService;
  }
  @httpGet("/page")
  private async index(
    ctx: Router.IRouterContext,
    next: () => Promise<any>
  ): Promise<any> {
    const result = await this.shopService.query()
    // ctx.body = await ctx.render("index");
    // console.log(this.shopService)
    console.log('🌰', result)
    ctx.body = result
  }
}
