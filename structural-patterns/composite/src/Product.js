class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    printDetails() {
        console.log(`${this.name} : $${this.price}`);
    }
}

module.exports = Product;