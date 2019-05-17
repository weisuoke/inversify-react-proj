import {IIndex} from "../interface/IIndex";
import {Model} from "../models/User";
import {provide, TYPES,TAGS,inject} from "../ioc/ioc"
@provide(TAGS.IndexService)
export class IndexService implements IIndex {
    private safeRequest;
    constructor(@inject(TYPES.SafeRequest) safeRequest){
        this.safeRequest = safeRequest;
    }
    private userStorage : Model.User[] = [
        {
            email: "yuanzhijia@yidengxuetang.com",
            name: "老袁"
        }, {
            email: "yuanzhijia@yidengfe.com",
            name: "weisuoke"
        }
    ];
    public getUser(id : string) : Model.User {
        let result: Model.User;
        // console.log("得到的响应库", this.safeRequest.fecth);
        result = this.userStorage[id];
        // result = await this.safeRequest.fecth("xx",{},function(){});
        return result;
    }
}