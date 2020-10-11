function strCount(str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
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
