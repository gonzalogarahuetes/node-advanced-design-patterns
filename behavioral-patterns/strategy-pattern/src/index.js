const PaymentProcessor = require("./payment-processor");
const { PaypalStrategy, CreditCardStrategy, BankTransferStrategy } = require("./payment-strategies");
const config = require("./config")

const processor = new PaymentProcessor();

const amountToPay = 100;

switch (config.defaultPaymentMethod) {
    case "paypal":
        processor.setStrategy(new PaypalStrategy("test@example.com"))
        break;
    case "creditCard":
        processor.setStrategy(new CreditCardStrategy("1234-1234-1234-1234"))
        break;
    case "bankTransfer":
        processor.setStrategy(new BankTransferStrategy("6789-6897-6789-6879"))
        break;

    default:
        console.log("Invalid payment method ❌");
        break;
}

processor.processPayment(amountToPay);