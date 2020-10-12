function enlargeFirst(str) {
  if (typeof str === 'string') {
    return str[0].toUpperCase() + str.slice(1);
  }

  return str;
}

module.exports = enlargeFirst;
