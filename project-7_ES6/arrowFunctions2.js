/*  Arrow Functions or Fat Arrow Functions
    reg function: 'this' refers to parent, left of the dot
    arrow function: refers to it's current surrounding scope
*/

const juan = {
  firstName: "juan",
  lastName: "doe",
  sayName: function() {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

juan.sayName();
// anna.sayName();
