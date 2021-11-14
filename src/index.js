/**
 * Returns true/false if string starts with
 * `http`, `https`, `localhost` or `file`,
 * followed by `:` and two or three `/`
 * @public
 * @param {string} str - input string
 * @returns {boolean} - true/false if input string has protocol
 */
module.exports = function hasProtocol(str) {
  if (typeof str !== 'string') {
    throw new TypeError(
      'hasprotocol() : expected string argument, received: ' + typeof str
    );
  }
  return /^(?:http|https|localhost|file):\/{2,3}/.test(str);
};
