const express = require('express');
const router = express.Router();
const config = require('../setting/config')
const SheetCtrl = require('../controllers/sheetCtrl')

// Data
let scheduleSheet = new SheetCtrl('schedule')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
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

module.exports = router
