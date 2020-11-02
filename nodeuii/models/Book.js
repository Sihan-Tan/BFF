/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:48:42
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 00:57:30
 * @Description: 书籍数据处理层
 */
class Book {
  constructor(app) {
    this.app = app;
  }

  getData(options) {
    return Promise.resolve({
      code: 200,
      data: "data",
      msg: "",
    });
  }
}

module.exports = Book;
