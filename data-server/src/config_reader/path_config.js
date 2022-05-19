
const path = require("path")

const url = require("../config/define/url")
var M = {}

M.getStoreFileUrl = function(fileName) {
    return path.join(url.STORE_ROOT_PATH,fileName)
},

module.exports = M