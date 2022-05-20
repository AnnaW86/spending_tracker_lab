const Account = require('./account');
const Merchant = require('./merchant');
const Tag = require('./tag');
const Transaction = require('./transaction');

const groceries = new Tag("Groceries", 400);
const bills = new Tag("Bills", 350);
const fun = new Tag ("Fun", 150);

const sainsbury = new Merchant("Sainsbury's", groceries);
const tesco = new Merchant("Tesco", groceries);
const voxi = new Merchant("Voxi", bills);
const costa = new Merchant("Costa", fun);
const vue = new Merchant("Vue", fun);
const starbucks = new Merchant("Starbucks", fun);

getTodaysDate = () => {
    return new Date().toISOString().split('T')[0];
}

setDate = (yyyy, mm, dd) => {
    return new Date(yyyy, mm, dd).toISOString().split('T')[0];
}

const transaction1 = new Transaction(34.5, getTodaysDate(), sainsbury);
const transaction2 = new Transaction(30, setDate(2022, 03, 28), voxi);
const transaction3 = new Transaction(5.5, getTodaysDate(), costa);
const transaction4 = new Transaction(2.5, getTodaysDate(), tesco);
const transaction5 = new Transaction(25, setDate(2022, 04, 10), vue);
const transaction6 = new Transaction(102, setDate(2022, 04, 03), sainsbury);
const transaction7 = new Transaction(85, setDate(2022, 03, 21), tesco);
const transaction8 = new Transaction(8.25, setDate(2022, 04, 02), costa);
const transaction9 = new Transaction(9.5, setDate(2022, 03, 21), starbucks);

const current = new Account("Current Account", [transaction1, transaction3, transaction4, transaction5, transaction7, transaction8]);
const saver = new Account("Saver Account", [transaction2, transaction6]);

// console.log(current);
// console.log(saver);
current.addTransaction(transaction9);
// console.log(current.transactions.length);
// current.filterTransactionsByMerchant(costa);
// current.filterTransactionsByTag(groceries);
// current.filterTransactionsByAmount(5, 50);
// console.log(current.filterTransactionsByMonth(05));
// for (let transaction of current.transactions) {
//     console.log(`You spent ${transaction.outputCurrency()} in ${transaction.merchant.name} on ${transaction.date}.`);
// }

console.log(current.checkSpendingInMonth(05));