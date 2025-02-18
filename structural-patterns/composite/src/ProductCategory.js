class ProductCategory {
    constructor(name, composites = []) {
        this.name = name;
        this.composites = composites;
    }

    get total() {
        return this.composites.reduce((total, nextItem) => total + nextItem.total, 0)
    }

    printDetails() {
        console.log(`${this.name}: $${this.total}`);
    }
}

module.exports = ProductCategory;