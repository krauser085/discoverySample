// environment variable
const VERSION = env.process.version_date || '2018-03-05'
const DEFAULT_NAME = env.process.default_name || 'discoveryTestApp'

// modules
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1')
const discovery = new DiscoveryV1({ version: VERSION })

// make 'query' a promise function
discovery.query = Promise.promisify(discovery.query)

const discoverySetup = new WatsonDiscoverySetup(discovery);
const discoverySetupParams = {
  default_name: DEFAULT_NAME,
  config_name: 'food-review-config',   // instead of 'Default Configuration',
  model_id: model_id
};