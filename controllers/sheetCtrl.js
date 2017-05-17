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

/*
 * [mappingTable]
 * #key: api Key.
 * #table: google sheet table name.
 */
const mappingTable = [
  {key: 'name'        , table: '姓名'},
  {key: 'info'        , table: '個人介紹'},
  {key: 'topic'       , table: '演講主題'},
  {key: 'summary'     , table: '演講摘要'},
  {key: 'image'       , table: '檔名'},
  {key: 'facebook'    , table: 'facebook'},
  {key: 'github'      , table: 'github'},
  {key: 'blog'        , table: 'blog'},
  {key: 'website'     , table: 'website'},
  {key: 'linkin'      , table: 'linkin'},
  {key: 'time'        , table: '時間'},
  {key: 'day'         , table: '大會日'}
]

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
          const obj = {}

          for(var mappingObj in mappingTable) {
            var item = mappingTable[mappingObj];
            var tableName = `gsx$${item.table}`
            if(row[tableName]){
              obj[item.key] = row[tableName]['$t'].replace(/\n/g, '<br/>').replace(/\r/g, '<br/>')
            }
          };

          return obj;
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
