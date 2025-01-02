const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater(
 * 'STRING',
 * {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00'
 * })
 *
 * => 'STRING PLUS 00 PLUS 00 PLUS **    STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');

  // let result = '';
  // let addStr = '';
  // if (options.addition && options.additionSeparator && additionRepeatTimes > 0) {
  //   addStr.fill(options.addition + options.additionSeparator, additionRepeatTimes);
  // }
  // return result.fill(addStr, options.repeatTime);
}

module.exports = {
  repeater
};
