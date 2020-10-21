function reduceAnalog(array, callback, initialValue) {
  let total = 0;
  let newInitialValue = 0;
  let start = 0;

  if (initialValue === undefined) {
    newInitialValue = array[0];
    start = 1;
  } else {
    newInitialValue = initialValue;
  }

  for (let i = start; i < array.length; i++) {
    total = (callback(newInitialValue, array[i], i, array));
    newInitialValue = total;
  }

  return total;
}

module.exports = reduceAnalog;
