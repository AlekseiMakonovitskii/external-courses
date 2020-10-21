function sliceAnalog(array, begin = 0, end = array.length) {
  let newArray = [];
  let total = 0;
  let newEnd = 0;

  if (begin < 0) {
    total = array.length + begin;
  } else {
    total = begin;
  }

  if (end < 0) {
    newEnd = array.length + end;
  } else {
    newEnd = end;
  }

  for (let i = total; i < newEnd; i++) {
    if (i <= array.length - 1) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = sliceAnalog;
