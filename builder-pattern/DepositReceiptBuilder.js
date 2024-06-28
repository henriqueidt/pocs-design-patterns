import { ReceiptBuilder } from "./ReceiptBuilder.js";

export class DepositReceiptBuilder extends ReceiptBuilder {
  constructor() {
    super();
    this.receipt.type = "deposit";
  }

  setSender(sender) {
    this.receipt.sender = sender;
    return this;
  }
}
