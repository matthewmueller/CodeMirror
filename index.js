/**
 * Module Dependencies
 */

var CodeMirror = module.exports = require('./lib/codemirror');

/**
 * Languages
 */

// Javascript
require('./mode/javascript/javascript')(CodeMirror);
