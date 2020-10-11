function deleteSpace(str) {
  if (typeof str === 'string') {
    return str.trim();
  }

  return str;
}

module.exports = deleteSpace;
