/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 22:58:17
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 23:44:29
 * @Description: File content
 */
class Index {
  constructor(app) {
    this.app = app;
  }

  getIndex(options) {
    return Promise.resolve("谭siHan");
  }
}

module.exports = Index;
