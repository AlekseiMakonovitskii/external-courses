class ElectricalAppliances {
  constructor(name, power, condition) {
    this.name = name;
    this.power = power;
    this.condition = condition;
  }
}

const electricKettle = new ElectricalAppliances('Electric kettle', 1, true);
const toaster = new ElectricalAppliances('Toaster', 2, false);
const microwave = new ElectricalAppliances('Microwave', 1, false);
const dishwasher = new ElectricalAppliances('Dishwasher', 2, true);

class Room {
  constructor(roomElectricalAppliances) {
    this.roomElectricalAppliances = roomElectricalAppliances;
  }

  totalPower() {
    this.totalPower = this.roomElectricalAppliances.filter((el) => el.condition === true).reduce((power, el) => power + el.power, 0);

    return `Общая потребляемая можность: ${this.totalPower}`;
  };

  findElectricalAppliances(wantedName) {
    this.findElectricalAppliances = this.roomElectricalAppliances.find((el) => {
      if (el.name === wantedName) {
        return el.name;
      }

      return null;
    })

    return this.findElectricalAppliances;
  };
}

let fullRoom = new Room([electricKettle, toaster, microwave, dishwasher]);
console.log(fullRoom);
console.log(fullRoom.totalPower());
console.log(fullRoom.findElectricalAppliances());
