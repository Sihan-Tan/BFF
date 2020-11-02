/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 01:21:10
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 01:27:06
 * @Description: 别名配置文件
 */
const moduleAlias = require("module-alias");
const { join } = require("path");
// Or multiple aliases
moduleAlias.addAliases({
  "@root": __dirname,
  "@controller": join(__dirname, "..", "controllers"),
  "@model": join(__dirname, "..", "models"),
});
