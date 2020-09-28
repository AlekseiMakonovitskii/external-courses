function maxArrNumber(x) {
    let max = x[0];
    for (let i = 0; i < x.length; i++) {
        if(x[i] > max) {
            max = x[i];
        }
    }
    return max;
}
module.exports = maxArrNumber;
