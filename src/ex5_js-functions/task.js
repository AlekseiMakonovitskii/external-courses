function Calculator() {
  this.value = 0;

  this.getResult = () => {
    return this.value;
  };

  this.reset = () => {
    this.value = 0;
  };

  this.add = (num) => {
    if (typeof num === 'number') {
      this.value += num;
    }

    return this.add;
  };

  this.subtract = (num) => {
    if (typeof num === 'number') {
      this.value -= num;
    }

    return this.subtract;
  };

  this.divide = (num) => {
    if (typeof num === 'number') {
      this.value /= num;
    }

    return this.divide;
  };

  this.multiply = (num) => {
    if (typeof num === 'number') {
      this.value *= num;
    }

    return this.multiply;
  };
}

let exportCalculator = new Calculator();

module.exports = exportCalculator;
