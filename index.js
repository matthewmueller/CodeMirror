/**
 * Module Dependencies
 */

var CodeMirror = module.exports = require('./lib/codemirror');

/**
 * Languages
 */

// Javascript
require('./modes/javascript/javascript')(CodeMirror);
