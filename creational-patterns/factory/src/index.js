const personFactory = require("./personFactory");


const test = personFactory("Test 1", 500);
const john = personFactory("John", 900, "employee", "Something");

john.payDay(300);

console.log(test.toString());
console.log(john.toString());