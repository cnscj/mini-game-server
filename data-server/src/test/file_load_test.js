const fs = require('fs')
const path_config = require('../config_reader/path_config')
fs.readFile(path_config.getStoreFileUrl("game_version.json"), 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})