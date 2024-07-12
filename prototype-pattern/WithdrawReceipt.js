import { Receipt } from "./Receipt.js";

export class WithdrawReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.receiver = props.receiver;
  }

  clone() {
    return new WithdrawReceipt(this);
  }
}
