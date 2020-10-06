function cloneObj(obj) {
  let newObj = Object.create(obj);

  return newObj;
}

module.exports = cloneObj;
