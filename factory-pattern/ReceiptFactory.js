import { DepositReceipt } from "./DepositReceipt.js";
import { TransferReceipt } from "./TransferReceipt.js";
import { WithdrawReceipt } from "./WithdrawReceipt.js";

export class ReceiptFactory {
  static createReceipt(props) {
    switch (props.type) {
      case "Deposit":
        return new DepositReceipt(props);
      case "Transfer":
        return new TransferReceipt(props);
      case "Withdraw":
        return new WithdrawReceipt(props);
      default:
        throw new Error("Unknown receipt type");
    }
  }
}
