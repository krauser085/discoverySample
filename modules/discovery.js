// environment variable
const version = env.process.version_date || '2018-03-05'

// modules
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1')
const discovery = new DiscoveryV1({ version })