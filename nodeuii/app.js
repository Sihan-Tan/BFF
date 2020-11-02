/*
 * @Author: Tan Xuan
 * @Date: 2020-10-30 00:05:53
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-11-02 21:57:16
 * @Description: 后台服务入口文件
 */

require("./config/alias");
const Koa = require("koa");
const app = new Koa();
const routes = require("./controllers/routes");
const render = require("koa-swig");
const co = require("co");
const log4js = require("log4js");
const serve = require("koa-static");
const errorHandler = require("./middleware/errorHandler");
// const { historyApiFallback } = require("koa2-connect-history-api-fallback");
const { port, viewDir, isDev, staticDir } = require("./config");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "./logs/cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = log4js.getLogger("cheese");

app.use(serve(staticDir));
app.context.render = co.wrap(
  render({
    root: viewDir,
    autoescape: true,
    cache: isDev ? false : "memory", // disable, set to false
    ext: "html",
    varControls: ["[[", "]]"],
    writeBody: false,
  })
);
// app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));
errorHandler.error(app, logger);
routes(app);

app.listen(port, function () {
  console.log("开启服务~");
});
