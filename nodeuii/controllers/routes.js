/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:38:34
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-11-01 21:01:25
 * @Description: 路由文件
 */
const router = require("koa-simple-router");

const ApiController = require("@controller/ApiController");
const BookController = require("@controller/BookController");
const IndexController = require("@controller/IndexController");
const apiControl = new ApiController();
const bookControl = new BookController();
const indexControl = new IndexController();

const routes = (app) => {
  app.use(
    router((_) => {
      _.get("/", indexControl.indexAction);
      _.get("/book", bookControl.bookAction);
      _.get("/index", apiControl.indexAction);
    })
  );
};

module.exports = routes;
