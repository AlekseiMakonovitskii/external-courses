function eachWordUpCase(str) {
  let strUp = str.split(' ');

  for (let i = 0; i < strUp.length; i++) {
    strUp[i] = strUp[i].slice(0, 1).toUpperCase() + strUp[i].slice(1);
  }
  
  return strUp.join(' ');
}

module.exports = eachWordUpCase;
