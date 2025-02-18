const Product = require("./Product");
const ProductCategory = require("./ProductCategory");

const someBook = new Product("Some book", 29.99); // leaf
const anotherBook = new Product("Another book", 39.99);
const oneMoreBook = new Product("One more book", 19.99);

const books = new ProductCategory("Books", [someBook, anotherBook, oneMoreBook]); //composite

const gift = new Product("Some gift", 0.99); // leaf

const offers = new ProductCategory("Offers", [new Product("pen", 1.9), new Product("magazine", 2.9)])

const products = new ProductCategory("Books and offers", [gift, books, offers])

console.log(`$${products.total}`);
products.printDetails()