'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _lodash = require("lodash");

// import {extend} from "lodash-es";
let config = {
  "viewDir": (0, _path.join)(__dirname, "..", "views"),
  "staticDir": (0, _path.join)(__dirname, "..", "assets")
};

{
  const prodConfig = {
    cacheMode: "memory",
    port: 8081
  };
  config = (0, _lodash.extend)(config, prodConfig);
}

exports.default = config;
