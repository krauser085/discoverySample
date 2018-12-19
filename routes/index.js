const express = require('express')
const router = express.Router()

const tag = '[router/]'

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(tag, 'GET')

  // identify a browser
  const isIE = req.headers['user-agent'].includes('Trident')
  res.render('index', { isIE })
})

module.exports = router
