function cloneObj(obj1) {
  let obj2 = {};

  for (let key in obj1) {
    obj2[key] = obj1[key];
  }

  return obj2;
}

module.exports = cloneObj;
