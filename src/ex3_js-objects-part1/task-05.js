function cloneObj(obj) {
  let newObj = Object.assign({}, obj);

  return newObj;
}

module.exports = cloneObj;
