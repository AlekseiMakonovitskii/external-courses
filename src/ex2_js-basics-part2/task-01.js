function numberOrString(x) {
    if(typeof x === 'number' && !isNaN(x)) {
      return 'number';
    } else if(typeof x === 'string') {
        return 'string';
    } else {
        return undefined;
    }
}
module.exports = numberOrString;
