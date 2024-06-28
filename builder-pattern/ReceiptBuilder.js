import { Receipt } from "./Receipt.js";

export class ReceiptBuilder {
  constructor() {
    this.receipt = new Receipt();
  }

  setAmount(amount) {
    this.receipt.amount = amount;
    return this;
  }

  build() {
    return this.receipt;
  }
}
