function strCount(str) {
  const obj = {};

  for (let i = 1; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = 0;
    } else {
      obj[str[i]]++;
    }
  }

  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }

  return;
}

module.exports = strCount;
