function reverseString(str) {
  let splitStr = str.split('');

  let reverseStr = splitStr.reverse();

  let joinStr = reverseStr.join('');

  return joinStr;
}

module.exports = reverseString;
