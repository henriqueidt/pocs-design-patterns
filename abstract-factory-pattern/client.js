import { ReceiptAppConfigurator } from "./ReceiptAppConfigurator.js";

const appConfigurator = new ReceiptAppConfigurator();

// DEPOSIT
const args = { from: "John Doe", amount: 100, isSuccess: true };
const app = appConfigurator.createReceiptApp(args);
app.buildReceipt(args);
console.log(app.printReceipt());

// WITHDRAW
const args2 = { to: "Anna Doe", amount: 300, isSuccess: true };
const app2 = appConfigurator.createReceiptApp(args2);
app2.buildReceipt(args2);
console.log(app2.printReceipt());

// TRANSFER
const args3 = {
  from: "John Doe",
  to: "Anna Doe",
  amount: 400,
  isSuccess: true,
};
const app3 = appConfigurator.createReceiptApp(args3);
app3.buildReceipt(args3);
console.log(app3.printReceipt());
