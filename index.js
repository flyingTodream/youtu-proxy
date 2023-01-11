const Koa = require('koa');
const app = new Koa();
const { getPlayUrl } = require('./getUrl')

app.use(async ctx => {
    const d = await getPlayUrl()
    ctx.body = 'Hello Vercel';
});


app.listen(3008, () => {
    console.log('3008项目启动')
});
