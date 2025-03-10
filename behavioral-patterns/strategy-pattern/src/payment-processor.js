class PaymentProcessor {
    constructor() {
        this.strategy = null;
    }

    processPayment(amount) {
        if (!this.strategy) {
            throw new Error("No payment strategy ❌ Please select a valid strategy")
        }
        this.strategy.pay(amount);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }
}

module.exports = PaymentProcessor;