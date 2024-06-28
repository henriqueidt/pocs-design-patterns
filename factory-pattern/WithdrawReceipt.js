import { Receipt } from "./Receipt.js";

export class WithdrawReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.type = "Withdraw Receipt";
  }

  generate(details) {
    console.log(
      `Generating ${this.type} for amount ${this.amount} withdrawn from account ${details.account}.`
    );
  }
}
