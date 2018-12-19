const discovery = require('../modules/discovery.js')

module.exports = {
  searchDocument (searchStr, filter) {
    return discovery.query(searchStr)
      .then(response => response.results)
      .catch(err => Promise.reject(err))
  }
}