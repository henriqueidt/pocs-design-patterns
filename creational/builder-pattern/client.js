import { DepositReceiptBuilder } from "./DepositReceiptBuilder.js";
import { ReceiptDirector } from "./ReceiptDirector.js";
import { TransferReceiptBuilder } from "./TransferReceiptBuilder.js";
import { WithdrawReceiptBuilder } from "./WithdrawReceiptBuilder.js";

const depositBuilder = new DepositReceiptBuilder();
const transferBuilder = new TransferReceiptBuilder();
const withdrawBuilder = new WithdrawReceiptBuilder();

const director = new ReceiptDirector();

const transferReceipt = director.buildTransferReceipt(
  transferBuilder,
  "Henrqiue",
  "Alice",
  100
);
console.log(JSON.stringify(transferReceipt, null, 2));

const depositReceipt = director.buildDepositReceipt(
  depositBuilder,
  "Alice",
  100
);
console.log(JSON.stringify(depositReceipt, null, 2));

const withdrawReceipt = director.buildWithdrawReceipt(
  withdrawBuilder,
  "Alice",
  100
);
console.log(JSON.stringify(withdrawReceipt, null, 2));
