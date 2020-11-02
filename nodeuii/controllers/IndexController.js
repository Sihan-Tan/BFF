/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:44:55
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-11-01 20:56:48
 * @Description: 首页控制器
 */
const Index = require("@model/Index");
class IndexController {
  constructor(app) {
    this.app = app;
  }
  async indexAction(ctx, next) {
    const index = new Index();
    ctx.body = await ctx.render("index-vue", {
      data: await index.getIndexs(),
    });
  }
}

module.exports = IndexController;
