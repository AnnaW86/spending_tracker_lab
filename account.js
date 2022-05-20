const Account = function(name, transactions = []) {
    this.name = name
    this.transactions = transactions
}

Account.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
}

Account.prototype.filterTransactionsByMerchant = function(merchant) {
    let filteredTransactions = [];
    for (let transaction of this.transactions) {
        if (transaction.merchant === merchant) {
            filteredTransactions.push(transaction);
        }
    }
    console.log(filteredTransactions);
}
Account.prototype.filterTransactionsByTag = function(tag) {
    let filteredTransactions = [];
    for (let transaction of this.transactions) {
        if (transaction.merchant.tag === tag) {
            filteredTransactions.push(transaction);
        }
    }
    console.log(filteredTransactions);
}
Account.prototype.filterTransactionsByAmount = function(lowerAmount, upperAmount) {
    let filteredTransactions = [];
    for (let transaction of this.transactions) {
        if (transaction.amount >= lowerAmount && transaction.amount <= upperAmount) {
            filteredTransactions.push(transaction);
        }
    }
    console.log(filteredTransactions);
}

Account.prototype.filterTransactionsByMonth = function(month) {
    let filteredTransactions = [];
    for (let transaction of this.transactions) {
        if (transaction.date.slice(5, 7) == month) {
            filteredTransactions.push(transaction)
        }
    }
    return filteredTransactions;
}

Account.prototype.checkSpendingInMonth = function(month) {
    let totalSpend = 0;
    for (let transaction of this.filterTransactionsByMonth(month)) {
            totalSpend += transaction.amount;
    }
    return `You spent ${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(totalSpend)} that month.`;
}


module.exports = Account;