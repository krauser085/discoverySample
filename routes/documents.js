var express = require('express')
var router = express.Router()
const mainController = require('../controllers/mainController.js')

/**
 * search documents with query options
 */
router.post('/', (req, res, next) => {
  let searchStr = req.params.searchStr
  let filters = req.params.filters
  mainController.searchDocument(searchStr, filters)
    .then(documents => res.json({ documents }))
    .catch(err => next(err))
})

module.exports = router