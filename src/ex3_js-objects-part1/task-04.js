function stirngAndObject(str, obj) {
  if (!(str in obj)) {
    /*eslint-disable*/
    obj[str] = "new";
    /*eslint-enable*/
  }  

  return obj;
}

module.exports = stirngAndObject;
