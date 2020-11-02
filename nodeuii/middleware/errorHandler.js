/*
 * @Author: Tan Xuan
 * @Date: 2020-11-02 21:41:43
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-11-02 21:54:37
 * @Description: File content
 */
const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        logger.error(error);
        ctx.status = ctx.status || 500;
        ctx.body = "网站500了。";
      }
    });
    app.use(async (ctx, next) => {
      await next();
      if (ctx.status !== 404) {
        return;
      }
      ctx.status = 404;
      ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="#放置自己首页的地址#" homePageName="回到我的主页"></script>`;
    });
  },
};

module.exports = errorHandler;
