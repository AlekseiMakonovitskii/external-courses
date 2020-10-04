function stirngAndObject(str, obj) {
  let result = obj;
  
  if (!(str in result)) {
    result[str] = "new";
  }

  return result;
  }
  
  module.exports = stirngAndObject;