const readline = require("readline");
const Iterator = require("./iterator");
const Product = require("./product");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); // Enable raw mode for detecting keypresses.

// Display a message to prompt user for input
console.log("⬆️⬇️➡️⬅️ Press arrow keys to navigate. Press Ctrl+C to exit.");

// Products array with updated product names and prices
const products = new Iterator([
    new Product("Smartphone X", 999.99),
    new Product("Wireless Headphones", 199.99),
    new Product("Laptop Pro", 1499.99),
    new Product("Smartwatch", 299.99),
    new Product("Gaming Console", 499.99),
    new Product("Bluetooth speaker", 149.99),
    new Product("4K Monitor", 349.99),
]);

products.start().writeLn();

// Event listener for keypress events
process.stdin.on("keypress", (char, key) => {
    // Clear the current line in terminal
    process.stdout.clearLine();
    process.stdout.cursorTo(0);


    // Handling different keypresses
    switch (key.name) {
        case "right":
            products.next().writeLn()
            break;
        case "left":
            products.prev().writeLn()
            break;
        case "up":
            products.first().writeLn()
            break;
        case "down":
            products.last().writeLn()
            break;
        case "c":
            if (key.ctrl) {
                console.log("👋 exiting...");
                process.exit();
            }
            break;

        default:
            console.log("❓ Unknown key: " + key.name);
            break;
    }
})
