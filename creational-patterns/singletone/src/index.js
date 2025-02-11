const Customer = require("./Customer");
const logger = require("./Logger");
const Product = require("./Product");

logger.log("starting app...")

const customer = new Customer("Test", 600);
const book_product = new Product("Some books", [
    {
        item: "Book1",
        qty: 5,
        price: 200
    },
    {
        item: "Book2",
        qty: 20,
        price: 39
    }
]);

logger.log("finished setup...");

console.log(`${logger.count} total logs`);
logger.logs.map(log => console.log(`    ${log.message}`));