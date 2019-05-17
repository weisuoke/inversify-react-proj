"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_koa_utils_1 = require("inversify-koa-utils");
var ioc_1 = require("./ioc/ioc");
require("reflect-metadata");
require("./ioc/loader");
var errorHandler_1 = require("./util/errorHandler");
var log4js = require("log4js");
var co_1 = require("co");
var render = require("koa-swig");
var serve = require("koa-static");
var koa2_connect_history_api_fallback_1 = require("koa2-connect-history-api-fallback");
var path_1 = require("path");
var config_1 = require("./config");
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
var logger = log4js.getLogger('cheese');
var container = new ioc_1.Container();
//如何加载资源
container.load(ioc_1.buildProviderModule());
var server = new inversify_koa_utils_1.InversifyKoaServer(container);
server.setConfig(function (app) {
    app.context.render = co_1.default.wrap(render({
        root: path_1.join(config_1.default.viewDir),
        autoescape: true,
        cache: "memory",
        ext: 'html',
        varControls: [
            "[[", "]]"
        ],
        writeBody: false
    }));
    app.use(serve(config_1.default.staticDir));
    app.use(koa2_connect_history_api_fallback_1.default());
}).setErrorConfig(function (app) {
    errorHandler_1.default.error(app, logger);
});
var app = server.build();
app.listen(3000, function () {
    console.log("一灯Inversify启动成功🍺");
});
