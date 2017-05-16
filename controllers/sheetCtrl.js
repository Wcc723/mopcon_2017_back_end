const request = require('request')
const config = require('../setting/config')

const getSheetData = function (shList, shKey, callback) {
  let shPath = config.spreadsheets.shPath
  let shCallback = 'public/values?alt=json'

  let path = `${shPath}${shKey}/${shList}/${shCallback}`
  return request({
    'url': path,
    'json': true
  }, callback)
}

const SheetCtrl = function (name) {
  let vm = this
  vm.name = name
  let key = config.spreadsheets[vm.name].shKey
  let shList = config.spreadsheets[vm.name].shList
  let shKey = config.spreadsheets[key]

  // getApi
  vm.data = {}
  vm.getData = () => {
    return new Promise((resolve, reject) => {
      getSheetData(shList, shKey, function (error, response, body) {

        // format JSON.
        let formatJSON = response.body.feed.entry.map((row) => {
          return {
            'name'      : row['gsx$姓名']['$t'].replace(/\n/g, '<br/>'),
            'info'      : row['gsx$個人介紹']['$t'].replace(/\n/g, '<br/>').replace(/\r/g, '<br/>'),
            'topic'     : row['gsx$演講主題']['$t'].replace(/\n/g, ''),
            'summary'   : row['gsx$演講摘要']['$t'].replace(/\n/g, '<br/>').replace(/\r/g, '<br/>'),
            'image'     : row['gsx$檔名']['$t'],
            'facebook'  : row['gsx$facebook']['$t'],
            'github'    : row['gsx$github']['$t'],
            'blog'      : row['gsx$blog']['$t'],
            'website'   : row['gsx$website']['$t'],
            'linkin'    : row['gsx$linkin']['$t']
          }
        })

        vm.data = formatJSON
        return resolve(formatJSON)
      })
    })
  }

  // data = Google Sheet Data
  vm.getData()
}

module.exports = SheetCtrl
