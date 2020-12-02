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
    this.counter = 0;
    
    for(let i = 0; i < this.roomElectricalAppliances.length; i++) {
      if (this.roomElectricalAppliances[i].condition === true) {
        this.counter += this.roomElectricalAppliances[i].power;
        }
    }

    console.log(`Общая потребляемая можность: ${this.counter}`);
  };

  findElectricalAppliances(wantedName) {
    for (let j = 0; j < this.roomElectricalAppliances.length; j++) {
      if (this.roomElectricalAppliances[j].name === wantedName) {
        console.log(`${wantedName} находится в комнате`);
      } else {
        console.log(`${wantedName} не находится в комнате`)
      }
    }  
  };
}


let fullRoom = new Room([electricKettle, toaster, microwave, dishwasher]);
console.log(fullRoom);
console.log(fullRoom.totalPower());
console.log(fullRoom.findElectricalAppliances());
