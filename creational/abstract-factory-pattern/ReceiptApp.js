export class ReceiptApp {
  constructor(receiptFactory) {
    this.receiptFactory = receiptFactory;
  }

  buildReceipt(args) {
    this.header = this.receiptFactory.createHeader(args);
    this.body = this.receiptFactory.createBody(args);
    this.footer = this.receiptFactory.createFooter(args);
  }

  printReceipt() {
    return `
      ${this.header.build()}
      ${this.body.build()}
      ${this.footer.build()}
    `;
  }
}
