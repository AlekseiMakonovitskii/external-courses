function numberOrString(x) {
  if (typeof x === 'number' && !isNaN(x)) {
    return 'number';
  } else if (typeof x === 'string') {
    return 'string';
  } 
    
  return undefined;

}

module.exports = numberOrString;
