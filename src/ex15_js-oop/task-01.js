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
    this.fullWeight = 0;

    for (let i = 0; i < this.present.length; i++) {
      this.fullWeight += this.present[i].weight;
    }

    console.log(`Подарок весит: ${this.fullWeight}`);
  };

  lightCandy() {
    this.lightCandy = [];

    for (let i = 0; i < this.present.length; i++) {
      if (this.present[i].weight <= 50) {
        this.lightCandy.push(this.present[i].name);
      }
    }

    console.log(`Легкие конфеты: ${this.lightCandy}`)
  };

  heavyCandy() {
    this.heavyCandy = [];

    for (let j = 0; j < this.present.length; j++) {
      if (this.present[j].weight > 50) {
        this.heavyCandy.push(this.present[j].name);
      }
    }

    console.log(`Тяжелые конфеты: ${this.heavyCandy}`);
  };

  findCandy(wantedName) {
    for (let h = 0; h < this.present.length; h++) {
      if (this.present[h].name === wantedName) {
        console.log(`${wantedName} лежат в подарке!`);
      } else {
        console.log(`${wantedName} не лежат в подарке!`)
      }
    }  
  }
}

let present = new Present([lollipops, caramelCandies, chocolateCandies, candySticks, candyBars, fruitDrops, gumdrops]);
console.log(present.fullWeight());
console.log(present.lightCandy());
console.log(present.heavyCandy());
console.log(present.findCandy());
