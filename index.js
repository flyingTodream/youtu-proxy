const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const logger = require('koa-logger');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');

var indexRouter = require('./routes/index');
onerror(app);
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text'],
}));
app.use(logger());
app.use(json());


app.use(indexRouter.routes(), indexRouter.allowedMethods());
app.use(router.routes());

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(3000, () => {
    console.log('3008项目启动')
});
