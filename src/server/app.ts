import {InversifyKoaServer} from "inversify-koa-utils";
import {Container, buildProviderModule} from "./ioc/ioc";
import "reflect-metadata";
import "./ioc/loader";
import errorHandler from "./util/errorHandler";
import * as log4js from 'log4js';
import co from "co";
import * as render from 'koa-swig';
import * as serve from 'koa-static';
import historyApiFallback from 'koa2-connect-history-api-fallback'
import {join} from "path";
import config from "./config";

//逻辑和业务错误 http日志
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/yd.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
const container = new Container();
//如何加载资源
container.load(buildProviderModule());
let server = new InversifyKoaServer(container);
server.setConfig(app => {
    app.context.render = co.wrap(render({
        root: join(config.viewDir),
        autoescape: true,
        cache: "memory",
        ext: 'html',
        varControls: [
            "[[", "]]"
        ],
        writeBody: false
    }));
    app.use(serve(config.staticDir));
    app.use(historyApiFallback());
}).setErrorConfig(app => {
    errorHandler.error(app, logger);
});

let app = server.build();
app.listen(3000, () => {
    console.log("一灯Inversify启动成功🍺");
});