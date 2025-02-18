class Item {
    constructor(itemName, itemCost) {
        this.itemName = itemName;
        this.itemCost = itemCost;
    }

    showDetails() {
        console.log(`${this.itemName} is priced at $${this.itemCost}.`);
    }
}

class SilverItem {
    constructor(baseItem) {
        this.itemName = `Silver ${baseItem.itemName}`;
        this.itemCost = baseItem.itemCost + 200;
    }
}

class GoldenItem {
    constructor(baseItem) {
        this.itemName = `Golden ${baseItem.itemName}`;
        this.itemCost = baseItem.itemCost + 500;
        this.waterproof = true;
    }

    showDetails() {
        console.log(`${this.itemName} is more expensive.`);
    }
}

module.exports = { Item, SilverItem, GoldenItem };