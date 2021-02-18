class Car {
  constructor() {
    this.wheels = 4;
    this.type = "Quad-cab";
  }
}

class Ford extends Car {
  constructor() {
    super();
    this.doors = 4;
  }
}
const ford = new Ford();
