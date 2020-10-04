function checkObject(str,obj) {
  if ((typeof str === 'string') && (typeof obj === 'object')) {
    for (let key in obj) {
      if (key === str) {
        return true;
      }
    }  
  }   
  
  return false;
}

module.exports = checkObject;

