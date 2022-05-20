const Transaction = function(amount, date, merchant) {
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
}

Transaction.prototype.outputCurrency = function() {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(this.amount);
}

// const groceries = new Transaction(43.25, "18/05/22", "Sainsbury's");

// groceries.outputCurrency();

module.exports = Transaction;