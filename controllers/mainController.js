const discovery = require('../modules/discovery.js')

const tag = '[mainController]'
module.exports = {
  searchDocument (searchStr, filter) {
    console.log(tag, 'query:', searchStr, 'filter:', filter)

    return discovery.query(searchStr, filter)
      .then(response => response.results)
      .catch(err => Promise.reject(err))
  }
}