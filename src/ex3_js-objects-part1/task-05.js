function cloneObj(obj1) {
  let obj2 = {};

  for (let key in obj1) {
    obj1.hasOwnProperty(key);
  }

  return obj2;
}

module.exports = cloneObj;
