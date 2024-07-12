export class Receipt {
  constructor({ amount } = {}) {
    this.type = "Receipt";
    this.amount = amount;
  }

  generate(details) {
    console.log(
      `Generating ${this.type} with details: ${JSON.stringify(details)}`
    );
  }
}
