import { Receipt } from "./Receipt.js";

export class TransferReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.type = "Transfer Receipt";
  }

  generate(details) {
    console.log(
      `Generating ${this.type} for amount ${this.amount} transferred from account ${details.fromAccount} to account ${details.toAccount}.`
    );
  }
}
