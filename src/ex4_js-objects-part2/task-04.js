function enlargeFirst(str) {
  if (typeof str === 'string') {
    let newStr = str[0].toUpperCase() + str.slice(1);

    return newStr;
  }

  return str;
}

module.exports = enlargeFirst;
