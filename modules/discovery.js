const request = require('request')
const env = require('../env/dev.js')

module.exports = {
  query (queryStr, filter = '') {
    return new Promise((res, rej) => {
      let params = {
        url: getUrl(queryStr, filter),
        auth: {
          user: env.discovery.credential.username,
          pass: env.discovery.credential.password
        }
      }

      // set proxy
      if (process.env.PROXY)
        params.proxy = process.env.PROXY

      request.get(params, (err, response) => {
        if (err) return rej(err)

        // parse response.body
        let data
        try { data = JSON.parse(response.body) }
        catch (error) { return rej(error) }

        return res(data)
      })
    })
  }
}

function getUrl (queryStr, filter) {
  const d_url = env.discovery.url
  const env_id = env.discovery.environment_id
  const col_id = env.discovery.collection_id
  const version = env.discovery.credential.version_date

  let url = `${d_url}/v1/environments/${env_id}/collections/${col_id}/query?version=${version}`

  if (queryStr) url = `${url}&query=${queryStr}`
  if (filter) url = `${url}&filter=${filter}`

  return url
}