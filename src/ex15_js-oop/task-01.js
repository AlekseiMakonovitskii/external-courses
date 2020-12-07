class Sweets {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

const lollipops = new Sweets('Lollipops', 50);
const caramelCandies = new Sweets('Caramel candies', 30);
const chocolateCandies = new Sweets('Chocolate candies', 100);
const candySticks = new Sweets('Candy Sticks', 20);
const candyBars = new Sweets('Candy Bars', 10);
const fruitDrops = new Sweets('Fruit Drops', 130);
const gumdrops = new Sweets('Gumdrops', 115);

class Present {
  constructor(present) {
    this.present = present;
  }

  fullWeight() {
    this.fullWeight = this.present.reduce(function (weight, el) {
      return weight + el.weight;
    }, 0);

    return `Подарок весит: ${this.fullWeight}`;
  };

  lightCandy() {
    this.lightCandy = this.present.map(function (el) {
      if (el.weight <= 50) {
        return el.name;
      }

      return ' ';

    }).filter(function (el) {
      return el !== ' ';
    }).join(', ');

    return `Легкие конфеты: ${this.lightCandy}`;
  };

  heavyCandy() {
    this.heavyCandy = this.present.map(function (el) {
      if (el.weight > 50) {
        return el.name;
      }

      return ' ';

    }).filter(function (el) {
      return el !== ' ';
    }).join(', ');

    return `Тяжелые конфеты: ${this.heavyCandy}`;
  };

  findCandy(wantedName) {
    this.findCandy = this.present.find(function (el) {
      if (el.name === wantedName) {
        return el.name;
      }

      return null;
    })

    return this.findCandy;
  };
}

let present = new Present([lollipops, caramelCandies, chocolateCandies, candySticks, candyBars, fruitDrops, gumdrops]);
console.log(present.fullWeight());
console.log(present.lightCandy());
console.log(present.heavyCandy());
console.log(present.findCandy());
