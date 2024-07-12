import { ReceiptFactory } from "./ReceiptFactory.js";

const depositReceipt = ReceiptFactory.createReceipt({
  type: "Deposit",
  amount: 1000,
});
depositReceipt.generate({ account: "12345" });

const transferReceipt = ReceiptFactory.createReceipt({
  type: "Transfer",
  amount: 500,
});
transferReceipt.generate({
  fromAccount: "12345",
  toAccount: "67890",
});

const withdrawReceipt = ReceiptFactory.createReceipt({
  type: "Withdraw",
  amount: 200,
});
withdrawReceipt.generate({ account: "12345" });
