const express = require('express');
const router = express.Router();
const config = require('../setting/config');
const SheetCtrl = require('../controllers/sheetCtrl');
const i18n = require('i18n');

// Data
let scheduleSheet = new SheetCtrl('schedule')

/* GET home page. */
router.get('/', function (req, res, next) {
  const lang = req.cookies.lang || 'zh_TW';
  res.render('index', { title: 'Express', lang: lang })
})

router.get('/schedule', (req, res, next) => {
  res.render('schedule', { title: 'Express', data: scheduleSheet.data })
})

// router.get('/:folder/:action', (req, res, next) => {
//   let folder = req.param('folder')
//   let action = req.param('action')
//   // let params = req.params.all()
//   res.render(`/${folder}/${action}`, { title: 'Express' })
// })

// for i18n
router.post('/set_language', function(req, res) {
  i18n.setLocale(global, req.body.lang);
  res.cookie('lang', req.body.lang, {
    maxAge: 900000,
    httpOnly: true
  });
  res.sendStatus(200);
});

module.exports = router
