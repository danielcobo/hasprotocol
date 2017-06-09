'use strict';

const val = require('tidyval');

/*
Returns true/false if string starts with
'http', 'https', 'localhost' or 'file',
followed by ':' and two or three '/'
*/
module.exports = function hasProtocol(str){
    val(str).validate('string');
    return /^(?:http|https|localhost|file):\/{2,3}/.test(str);
};
