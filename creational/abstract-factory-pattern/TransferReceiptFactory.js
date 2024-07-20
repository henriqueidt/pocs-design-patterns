import { Body } from "./Body.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export class TransferReceiptFactory {
  createHeader({ from, to }) {
    return new Header({ firstArg: from, secondArg: to });
  }

  createBody({ amount }) {
    return new Body({ firstArg: amount });
  }

  createFooter({ isSuccess }) {
    return new Footer({
      firstArg: isSuccess ? "Transfer was successfull!" : "Transfer failed!",
    });
  }
}
