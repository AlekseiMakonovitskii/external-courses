function checkNumbers(x) {
  const result = [0,0,0];

  for (let i = 0; i < x.length; i++) {
    if (typeof(x[i]) === 'number' && !Number.isNaN(x[i])) {
      if (x[i] === 0) {
        result[2]++
      }
      else if (x[i] % 2 === 0) {
        result[0]++
      }
      else {
        result[1]++
      }  
    }   
  }

  return result;
  
}

module.exports = checkNumbers;
