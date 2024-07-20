import { Body } from "./Body.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export class DepositReceiptFactory {
  createHeader({ from }) {
    return new Header({ firstArg: from });
  }

  createBody({ amount }) {
    return new Body({ firstArg: amount });
  }

  createFooter({ isSuccess }) {
    return new Footer({
      firstArg: isSuccess ? "Deposit was successfull!" : "Deposit failed!",
    });
  }
}
