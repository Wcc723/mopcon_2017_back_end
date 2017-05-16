var yaml = require('js-yaml');
var fs   = require('fs');


var appConfig = {}
try {
  appConfig = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
  console.log(appConfig);
} catch (e) {
  console.log(e);
}

module.exports = appConfig;