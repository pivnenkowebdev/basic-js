const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // if (date === undefined) {
  //   throw new Error("Invalid date!");
  // }
  // if (!(date instanceof Date) || isNaN(date.getTime())) {
  //   return 'Invalid date!';
  // }

  // const numOfMonth = date.getMonth();
  // let result = '';

  // if (numOfMonth === 11 || numOfMonth === 0 || numOfMonth === 1) {
  //   result = 'winter';
  // } else if (numOfMonth === 2 || numOfMonth === 3 || numOfMonth === 4) {
  //   result = 'spring';
  // } else if (numOfMonth === 5 || numOfMonth === 6 || numOfMonth === 7) {
  //   result = 'summer';
  // } else if (numOfMonth === 8 || numOfMonth === 9 || numOfMonth === 10) {
  //   result = 'autumn';
  // }
  // return result;
}

module.exports = {
  getSeason
};
