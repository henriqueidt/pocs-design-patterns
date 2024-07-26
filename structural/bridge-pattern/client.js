import { Borrower } from "./Borrower.js";
import { RegularAccount } from "./RegularAccount.js";
import { RiskyAccount } from "./RiskyAccount.js";

const getMoney = (borrower, value) => {
  console.log(borrower.getMoney(value));
};

const addMoney = (borrower, value) => {
  console.log(borrower.addMoney(value));
};

const transferMoney = (sender, receiver, value) => {
  console.log(sender.transferMoney(value, receiver));
};

const regularAccount = new RegularAccount(100);
const riskyAccount = new RiskyAccount(100);

// ------------------------------------- //

const regularBorrower = new Borrower(regularAccount);
const riskyBorrower = new Borrower(riskyAccount);

// Regular should successfully withdraw
getMoney(regularBorrower, 50);
// Risky should fail withdraw if amount is greater than 50% of balance
getMoney(riskyBorrower, 60);

// Risky should successfully transfer less than 50% of balance
transferMoney(riskyBorrower, regularBorrower, 50);

// Risky should fail transfer if amount is greater than 50% of balance
transferMoney(riskyBorrower, regularBorrower, 30);
