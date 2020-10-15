function strAndNum(str, num) {
  if (str.length > num) {
    return str.substr(0, num - 1) + '…';
  }

  return str;
}

module.exports = strAndNum;
