//index.js

const module02 = require('./module02/index.js')
// 或
const module02 = require('./module02/index')
// 或
const module02 = require('./module02')

console.log(module02)
// 結果:
// {
//     module02Function: function() {},
//     module02String: 'module02',
//     module01: {
//         module01Function: function() {},
//         module01String: 'module01',
//     },
// }