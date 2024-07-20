import { ReceiptBuilder } from "./ReceiptBuilder.js";

export class WithdrawReceiptBuilder extends ReceiptBuilder {
  constructor() {
    super();
    this.receipt.type = "withdraw";
  }

  setReceiver(receiver) {
    this.receipt.receiver = receiver;
    return this;
  }
}
