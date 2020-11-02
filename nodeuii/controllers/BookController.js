/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:44:55
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 23:00:50
 * @Description: 书籍控制器
 */
const Book = require("@model/Book");
class BookController {
  constructor(app) {
    this.app = app;
  }
  async bookAction(ctx, next) {
    const book = new Book();
    ctx.body = await book.getData();
  }
}

module.exports = BookController;
