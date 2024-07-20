import { Receipt } from "./Receipt.js";

export class TransferReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.sender = props.sender;
    this.receiver = props.receiver;
  }

  clone() {
    return new TransferReceipt(this);
  }
}
