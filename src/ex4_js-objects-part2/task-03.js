function deleteSpace(str) {
  if (typeof str === 'string') {
    return str.trimStart().trimEnd();
  }

  return str;
}

module.exports = deleteSpace;
