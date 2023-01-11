var express = require('express');
var router = express.Router();
const { getPlayUrl } = require('../getUrl')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const d = await getPlayUrl('晴天', '周杰伦')
  res.send(d);
});

module.exports = router;
