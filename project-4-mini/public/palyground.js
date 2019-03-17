class Car {
  constructor() {
    this.wheels = 4;
    this.type = "sedan";
  }
}

class Ford extends Car {
  constructor() {
    super();
    this.windows = 4;
  }
}

const car = new Car();
const ford = new Ford();

//console.log(ford.wheels);
