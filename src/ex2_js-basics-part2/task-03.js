function checkNumbers(x){
    let zero = 0;
    let odd = 0;
    let even = 0;
    x.forEach(function(y){
        if(typeof y === 'number' && !isNaN(y)) {
            if(y === 0) {
                zero++;
            } else if(y % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    });
    return [zero, odd, even];
}
module.exports = checkNumbers;
