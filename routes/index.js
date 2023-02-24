const router = require('koa-router')()
const schedule = require('node-schedule');

const num = {
  'dlc': 1,
  'cm': 1,
  'duar': 1
}
schedule.scheduleJob('10 * * * * *', () => {
  num.dlc = 1;
  num.cm = 1;
  num.duar = 1;
});

/* GET home page. */
router.get('/', async ctx => {
  ctx.body = 'server is okkkk!'
});

router.post('/', async function (ctx, next) {
  const { proName } = ctx.request.body;
  const number = num[proName] || 1;
  num[proName] = number + 1
  const d = new Date();
  ctx.body = `dist-${proName}-${padNumber(2, Number(d.getMonth() + 1))}${padNumber(2, d.getDate())}-${padNumber(3, number)}`;
});

function padNumber(num, val) {
  return val.toString().padStart(num, '0');
}

module.exports = router;
