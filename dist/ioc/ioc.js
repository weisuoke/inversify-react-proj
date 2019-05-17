"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
exports.Container = inversify_1.Container;
exports.inject = inversify_1.inject;
var inversify_koa_utils_1 = require("inversify-koa-utils");
exports.controller = inversify_koa_utils_1.controller;
exports.httpGet = inversify_koa_utils_1.httpGet;
exports.TYPE = inversify_koa_utils_1.TYPE;
var Router = require("koa-router");
exports.Router = Router;
var tags_1 = require("../constant/tags");
exports.TAGS = tags_1.default;
var types_1 = require("../constant/types");
exports.TYPES = types_1.default;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.provide = inversify_binding_decorators_1.provide;
exports.buildProviderModule = inversify_binding_decorators_1.buildProviderModule;
var provideThrowable = function (identifier, name) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.provideThrowable = provideThrowable;
