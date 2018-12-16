var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/query', () => {

})

module.exports = router;
