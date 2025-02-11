const PersonBuilder = require("./personBuilder");

// Employees
// const john = new Customer("John", true, true, 50);
// const bill = new Customer("Bill", true, false, 30);
// const max = new Customer("John", true, false);

// Customers
// const frank = new Customer("Frank", false, false, 0, 600, ["shorts", "shoes"]);
// const ali = new Customer("Ali", false, false, 0, 1100);

// Employees
const john = new PersonBuilder("John").makeEmployee().makeManager().withFunds(50).build();
const bill = new PersonBuilder("Bill").makeEmployee().withFunds(30).build();
const max = new PersonBuilder("Max").makeEmployee();

// Customers

const frank = new PersonBuilder("Frank").withFunds(600).withList(["shorts", "shoes"]).build();
const ali = new PersonBuilder("Ali").withFunds(1100).withList([]).build();

console.log(john.toString());
console.log(bill.toString());
console.log(max.toString());
console.log(frank.toString());
console.log(ali.toString());