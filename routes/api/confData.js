const express = require('express');
const router = express.Router();
const config = require('../../setting/config')
const SheetCtrl = require('../../controllers/sheetCtrl')
const jsonSource = require('../../data/index')

// Data
let scheduleSheet = new SheetCtrl('schedule')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})

router.get('/schedule', (req, res, next) => {
    res.send(scheduleSheet.data)
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