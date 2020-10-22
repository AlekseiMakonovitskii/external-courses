function reduceAnalog(array, callback, initialValue) {
  let total = 0;
  let start = 0;

  if (initialValue === undefined) {
    total = array[0];
    start = 1;
  } else {
    total = initialValue;
  }

  for (let i = start; i < array.length; i++) {
    total = callback(total, array[i], i, array);
  }

  return total;
}

module.exports = reduceAnalog;
