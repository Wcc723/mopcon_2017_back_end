const express = require('express');
const router = express.Router();
const config = require('../../setting/config')
const SheetCtrl = require('../../controllers/sheetCtrl')
const jsonSource = require('../../data/index')

// Data
// let scheduleSheet = new SheetCtrl('schedule')
// let unconfSheet = new SheetCtrl('unconf')
// let sponsorSheet = new SheetCtrl('sponsor')
// let communitySheet = new SheetCtrl('community')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/schedule', (req, res, next) => {
  res.send(scheduleSheet.data)
  res.end()
})

router.get('/unconf', (req, res, next) => {
  res.send({
    'day_one': unconfSheet.data.filter((item) => item.day === 'day1'),
    'day_two': unconfSheet.data.filter((item) => item.day === 'day2')
  })
  res.end()
})

router.get('/sponsor', (req, res, next) => {
  res.send({
    'tony_stark': sponsorSheet.data.filter((item) => item.rank === 'TonyStark'),
    'bruce_wayne': sponsorSheet.data.filter((item) => item.rank === 'BruceWayne'),
    'developer': sponsorSheet.data.filter((item) => item.rank === 'Developer'),
    'special_thank': sponsorSheet.data.filter((item) => item.rank === 'SpecialThank')
  })
  res.end()
})

router.get('/community', (req, res, next) => {
  res.send(communitySheet.data)
  res.end()
})

/*
 * mopcon 2016 json file read.
 * schedule, community, sponsor, unconf
 * http://localhost:3000/api/data/json/FILE_NAME
 */
router.get('/json/:fileName', (req, res, next) => {
  let fileName = req.param('fileName')
  let json = jsonSource[fileName] || jsonSource['schedule']

  res.send(json)
  res.end()
})

router.get('/:folder/:action', (req, res, next) => {
  let folder = req.param('folder')
  let action = req.param('action')
  // let params = req.params.all()
  res.render(`/${folder}/${action}`, { title: 'Express' })
})

module.exports = router