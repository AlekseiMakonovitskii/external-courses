function strAndNum(str, num) {
  let result = '';

  if (str.length > num) {
    return str.substr(0, num - 1) + "…";
  }

  return result;
}

module.exports = strAndNum;
