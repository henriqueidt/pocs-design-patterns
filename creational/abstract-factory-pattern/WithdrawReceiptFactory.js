import { Body } from "./Body.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export class WithdrawReceiptFactory {
  createHeader({ to }) {
    return new Header({ firstArg: to });
  }

  createBody({ amount }) {
    return new Body({ firstArg: amount });
  }

  createFooter({ isSuccess }) {
    return new Footer({
      firstArg: isSuccess ? "Withdraw was successfull!" : "Withdraw failed!",
    });
  }
}
