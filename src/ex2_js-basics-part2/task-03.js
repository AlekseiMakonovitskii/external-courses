function checkNumbers(x) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number' && !isNaN(x[i]) && x[i] !== 0) {
      if (x[i] % 2 === 0) {
        even++;
      } 
      
      if (x[i] % 2 !== 0) {
        odd++;
      }
    } 
      
    if (x[i] === 0) {
      zero++;
    }
  }
  
  return [even, odd ,zero];
}

module.exports = checkNumbers;
