export class Header {
  constructor({ firstArg, secondArg }) {
    this.firstArg = firstArg;
    this.secondArg = secondArg;
  }

  build() {
    return `${this.firstArg} ${this.secondArg ? "->" + this.secondArg : ""}`;
  }
}
