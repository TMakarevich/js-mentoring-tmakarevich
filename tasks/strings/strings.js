/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof (str) == 'number') return 'This is not a string!';
  let arr = str.split('');
  let arrReverse = arr.reverse();
  let strReverse = arrReverse.join('');
  return strReverse;
}

/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  let str = String(year); // the logic for non 4 digits year is not realised
  if (str[2] == 0 && str[3] == 0) {
    return (Number(str[0] + str[1]));
  } else if (str[1] <= 9) {
    return (Number(str[0] + str[1]) + 1);
  }
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) count = count + 1;
  }
  return count;
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else return (str.slice(0, num) + '...');
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  let arr = text.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 && arr[i + 1] == 0) {
      arr.splice(i, 2, 'ten');
    }
  }
  let textNew = arr.join('');
  return textNew;
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  let reg = /(?<=\[).+?(?=\])/g;
  return (text.replace(reg, 'CONFIDENTIAL'));
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};