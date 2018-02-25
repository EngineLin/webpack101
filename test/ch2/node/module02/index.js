// module02/index.js

const module01Obj = require('../module01/index.js')

const output = {
    module02Function: function() {},
    module02String: 'module02',
    module01: module01Obj,
}

module.exports = output

// 或
module.exports = {
    module02Function: function() {},
    module02String: 'module02',
    module01: module01Obj,
}