var express = require('express')
var router = express.Router()
const mainController = require('../controllers/mainController.js')

/**
 * search documents with query options
 */
router.post('/', (req, res, next) => {
  let query = req.body.query
  let filters = req.body.filters
  mainController.searchDocument(query, filters)
    .then(documents => res.json({ documents }))
    .catch(err => next(err))
})

module.exports = router
