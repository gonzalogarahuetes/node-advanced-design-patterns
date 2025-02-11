const Customer = require("./Customer");

class PersonBuilder {
    constructor(name = "Unknown"){
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager() {
        this.isManager = true;
        return this;
    }

    withHours(hours) {
        this.hours = hours ?? 0;
        return this;
    }

    withFunds(funds) {
        this.funds = funds ?? 0;
        return this;
    }

    withList(list) {
        this.shoppingList = list ?? [];
        return this;
    }

    build() {
        return new Customer(this);
    }
}

module.exports = PersonBuilder;