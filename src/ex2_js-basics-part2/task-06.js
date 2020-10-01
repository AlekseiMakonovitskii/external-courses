function numbersSelection(x) {
  if (x > 1000 || x < 0) {
    return 'Данные неверны';
  } 
  
  if (x === 0 || x === 1) {
    return `${x} не является простым числом`;
  } 

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return `Число ${x} - составное число`;
    } 
  }

  return `Число ${x} - простое число`; 
}

module.exports = numbersSelection;
