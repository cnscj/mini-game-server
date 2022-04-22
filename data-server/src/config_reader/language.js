const util = require('util')
const description = require("../config/deploy/description")
var M = {}

M.getString = function(id,...params) {
    return util.format(description[id],...params)
},

module.exports = M