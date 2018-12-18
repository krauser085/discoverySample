const DiscoveryV1 = require('watson-developer-cloud/discovery/v1')
const env = require('../env/dev.js')
const discovery = new DiscoveryV1(env.discovery.credential)

let params = {
  environment_id: env.discovery.environment_id,
  collection_id: env.discovery.collection_id,
}

module.exports = {
  query(queryStr, filter = '') {
    params.query = queryStr
    return new Promise((res, rej) => {
      discovery.query(params, (err, response) => {
        if (err) return rej(err)
        return res(response)
      })
    })
  }
}