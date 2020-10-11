function newStr(str1, str2, num) {
  let arr = str1.split(' ');
  
  arr[num] += ' ' + str2;

  return arr.join(' ');
}

module.exports = newStr;
