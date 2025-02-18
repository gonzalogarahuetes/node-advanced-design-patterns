const { Item, GoldenItem, SilverItem } = require("./Item");
const Customer = require("./Customer");

const alice = new Customer("Alice", 2500);

const phonecase = new Item("Phone Case", 29.99);
const headphones = new Item("Headphones", 49.99);
const silverPhoneCase = new SilverItem(phonecase);
const goldenPhoneCase = new GoldenItem(phonecase);

alice.buy(silverPhoneCase);
alice.buy(goldenPhoneCase);
alice.buy(headphones);

alice.displayStatus();