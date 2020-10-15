function checkObj(prop, obj) {
  let prot = Object.getPrototypeOf(obj);

  if (prot.hasOwnProperty(prop)) {
    return obj[prop];
  } 
    
  return undefined;
}

module.exports = checkObj;
