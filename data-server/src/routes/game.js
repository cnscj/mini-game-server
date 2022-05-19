const express = require("express")
const router = express.Router()
const fs = require('fs')
const path_config = require('../config_reader/path_config')

router.get("/getVersion",function (req,res) {
    fs.readFile(path_config.getStoreFileUrl("game_version.json"), 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.send(data)
    })
})

router.get("/getMd5",function (req,res) {
    
})

router.get("/getServerList",function (req,res) {
    
})

router.get("/getGameNotice",function (req,res) {
    
})

router.get("/getVersionNotice",function (req,res) {
    
})

module.exports = router