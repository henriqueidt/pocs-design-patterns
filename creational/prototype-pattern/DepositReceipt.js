import { Receipt } from "./Receipt.js";

export class DepositReceipt extends Receipt {
  constructor(props) {
    super(props);
    this.sender = props.sender;
  }

  setSender(sender) {
    this.sender = sender;
  }

  clone() {
    return new DepositReceipt(this);
  }

  cloneAsObject() {
    return { ...this };
  }
}
