import { ReceiptBuilder } from "./ReceiptBuilder.js";

export class TransferReceiptBuilder extends ReceiptBuilder {
  constructor() {
    super();
    this.receipt.type = "transfer";
  }

  setSender(sender) {
    this.receipt.sender = sender;
    return this;
  }

  setReceiver(receiver) {
    this.receipt.receiver = receiver;
    return this;
  }
}
