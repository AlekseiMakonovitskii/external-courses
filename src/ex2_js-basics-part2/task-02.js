function arrayCheck(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
    console.log('Общее число элементов: ' + x.length);
    return;
}
module.exports = arrayCheck;
