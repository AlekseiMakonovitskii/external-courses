function objectInfo (obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
  }  
}

module.exports = objectInfo;
