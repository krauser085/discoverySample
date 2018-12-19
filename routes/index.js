var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  // identify a browser
  const isIE = req.headers['user-agent'].includes('Trident')

  res.render('index', { isIE })
})

module.exports = router;
