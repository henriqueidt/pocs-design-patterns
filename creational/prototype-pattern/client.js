import { DepositReceipt } from "./DepositReceipt.js";
import { TransferReceipt } from "./TransferReceipt.js";

// Lets say alice wants to deposit 1000, but she has a pix limit of 100 per transaction
// We can create a deposit receipt for her and clone it 9 times
const depositReceipt = new DepositReceipt({
  sender: "Alice",
  value: 100,
});

const depositReceipts = Array.from({ length: 9 }, () => depositReceipt.clone());

console.log(depositReceipt, depositReceipts);

// testing if we change one of the cloned values, if it will affect the others
depositReceipt.setSender("Bob");
console.log(depositReceipt, depositReceipts);

// cloning the class as objects as we normally do in JS
console.log(depositReceipt.cloneAsObject());
const depositReceipts2 = Array.from({ length: 9 }, () =>
  depositReceipt.cloneAsObject()
);
// testing if we change one of the cloned values, if it will affect the others
depositReceipt.setSender("John");
console.log(depositReceipt, depositReceipts2);

// We can use the class to create different classes like
const transferReceipt = new TransferReceipt({
  ...depositReceipt,
  receiver: "Andre",
});
console.log(transferReceipt);
