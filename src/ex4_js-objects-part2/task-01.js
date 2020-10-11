function checkObj(prop, obj) {
  let prot = Object.getPrototypeOf(obj);

  if (prot.hasOwnProperty(prop)) {
    return 1;
  } 
    
  return undefined;
}

module.exports = checkObj;
