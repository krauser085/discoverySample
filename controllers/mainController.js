const discovery = require('../modules/discovery.js')

module.exports = {
  searchDocument(searchStr, filter = '') {
    discovery.query(searchStr)
      .then(response => {
        console.log(response)
        return response.results
      })
      .catch(err => Promise.reject(err))
  }
}