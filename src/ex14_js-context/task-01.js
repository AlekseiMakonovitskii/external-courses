function Calculator() {
  this.value = 0;

  this.getResult = () => {
    return this.value;
  };

  this.reset = () => {
    this.value = 0;

    return this;
  };

  this.add = (num = 0) => {
    this.value += num;

    return this;
  };

  this.subtract = (num = 0) => {
    this.value -= num;

    return this;
  };

  this.divide = (num = 1) => {
    this.value /= num;

    return this;
  };

  this.multiply = (num = 1) => {
    this.value *= num;

    return this;
  };

  this.setState = (state = 0) => {
    this.value = state;

    return this;
  };

  this.fetchData = (callback) => {
    setTimeout(() => callback(500));

    return this;
  };
}

let calculator = new Calculator();

module.exports = calculator;
