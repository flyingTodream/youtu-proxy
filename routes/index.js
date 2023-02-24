var express = require('express');
var router = express.Router();
const { getPlayUrl } = require('../getUrl')

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.send('okkk');
});
router.get('/a', async function (req, res, next) {  
  res.send("hello");
});

module.exports = router;
