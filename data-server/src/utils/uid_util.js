
var M = {}

var _eventUid = 1000

M.getEventUid = function() {
    _eventUid = _eventUid + 1
    return _eventUid
}

module.exports = M