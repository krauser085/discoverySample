const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController.js')

const tag = '[router/documents]'

/**
 * search documents with query options
 */
router.post('/', (req, res, next) => {
  console.log(tag, 'POST', req.body)

  // params
  let query = req.body.query
  let filters = req.body.filters

  mainController.searchDocument(query, filters)
    .then(documents => res.json({ documents }))
    .catch(err => next(err))
})

module.exports = router
