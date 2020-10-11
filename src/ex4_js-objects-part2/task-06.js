function eachWordUpCase(str) {
  let strUp = '';

  for (i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      strUp += str[i].toUpperCase();
    } else {
      strUp += str[i];
    }
  }
  
  return strUp;
}

module.exports = eachWordUpCase;
