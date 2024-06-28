import { Receipt } from "./Receipt.js";

export class DepositReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.type = "Deposit Receipt";
  }

  generate(details) {
    console.log(
      `Generating ${this.type} for amount ${this.amount} deposited into account ${details.account}.`
    );
  }
}
