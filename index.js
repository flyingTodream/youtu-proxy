const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
var indexRouter = require('./routes/index');

app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(router.routes());


app.listen(3000, () => {
    console.log('3008项目启动')
});
