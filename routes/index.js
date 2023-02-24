const router = require('koa-router')()
const schedule = require('node-schedule');


const num = {
  a: 0
}
schedule.scheduleJob('10 * * * * *', () => {
  num.a = 0
});
/* GET home page. */
router.get('/', async ctx => {
  num.a = num.a + 1
  ctx.body = num.a
});

router.get('/a', async function (req, res, next) {
  res.send("hello");
});

module.exports = router;
