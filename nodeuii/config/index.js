/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:12:26
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 22:49:00
 * @Description: 项目配置项
 */
const { extend } = require("lodash");
const { join } = require("path");
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === "development";
const isProd = NODE_ENV === "production";

let baseConfig = {
  port: "3000",
  isDev,
  viewDir: join(__dirname, "..", "views"),
  staticDir: join(__dirname, "..", "assets"),
};

if (isDev) {
  const devConfig = {};
  baseConfig = extend(baseConfig, devConfig);
}

if (isProd) {
  const prodConfig = {
    port: "80",
  };
  baseConfig = extend(baseConfig, prodConfig);
}

module.exports = baseConfig;
