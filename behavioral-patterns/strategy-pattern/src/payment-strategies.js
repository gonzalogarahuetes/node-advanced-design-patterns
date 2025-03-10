class PaypalStrategy {
    constructor(email) {
        this.email = email;
    }

    pay(amount) {
        console.log(`Paypal: paying $${amount} to ${this.email} 💰`);
    }
}

class CreditCardStrategy {
    constructor(creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    pay(amount) {
        console.log(`Credit Card: paying $${amount} to credit card number ${this.creditCardNumber} 💰`);
    }
}

class BankTransferStrategy {
    constructor(bankAccount) {
        this.bankAccount = bankAccount;
    }

    pay(amount) {
        console.log(`Bank Transfer: paying $${amount} to account ${this.bankAccount} 💰`);
    }
}

module.exports = { PaypalStrategy, CreditCardStrategy, BankTransferStrategy }