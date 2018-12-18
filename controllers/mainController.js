const discovery = require('../modules/discovery.js')

module.exports = {
  searchDocument (searchStr, filter = '') {
    return discovery.query(searchStr)
      .then(response => {
        console.log(response)
        return response.results
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}