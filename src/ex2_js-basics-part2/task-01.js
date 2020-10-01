function numberOrString(x) {
  const type = typeof x;

  if (type === 'number' && !isNaN(x)) {
    return 'number';
  } 
  
  if (type === 'string') {
    return 'string';
  } 
    
  return undefined;
}

module.exports = numberOrString;
