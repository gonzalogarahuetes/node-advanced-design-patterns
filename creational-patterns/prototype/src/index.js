const base_prototype = require("./base_prototype.js");

const customer = base_prototype.clone();
customer.name = "Test 1"
customer.addItemToList("product 5");

const john = base_prototype.clone();
john.name = "John Something";
john.addItemToList("product 6");

console.log(`${customer.name}: ${customer.cartItems}`);
console.log(`${john.name}: ${john.cartItems}`);