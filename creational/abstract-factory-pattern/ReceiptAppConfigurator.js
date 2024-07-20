import { DepositReceiptFactory } from "./DepositReceiptFactory.js";
import { ReceiptApp } from "./ReceiptApp.js";
import { TransferReceiptFactory } from "./TransferReceiptFactory.js";
import { WithdrawReceiptFactory } from "./WithdrawReceiptFactory.js";

export class ReceiptAppConfigurator {
  createReceiptApp(args) {
    if (args.from && args.to) {
      return new ReceiptApp(new TransferReceiptFactory());
    }
    if (args.from) {
      return new ReceiptApp(new DepositReceiptFactory());
    }
    return new ReceiptApp(new WithdrawReceiptFactory());
  }
}
