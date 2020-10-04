function deepCopyObject(obj) {
  let clone;

  if (obj.length) {
    clone = [];
  } else {
      clone = {};
  }
  
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      clone[prop] = deepCopyObject(obj[prop]);
    } else {
        clone[prop] = obj[prop];
      }
  } 

  return clone;
}

module.exports = deepCopyObject;



