const Customer = require("./Customer");
const Employee = require("./Employee");

const personFactory = (name, funds = 0, type, employer) => {
    if(type === "employee") {
        return new Employee(name, funds, employer);
    }

    return new Customer(name, funds)
}

module.exports = personFactory;