const discovery = require('../modules/discovery.js')

// query test
discovery.query('hello')
  .then(response => {
    console.log(response)
  })