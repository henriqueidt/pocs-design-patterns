export class Body {
  constructor({ firstArg }) {
    this.firstArg = firstArg;
  }

  build() {
    return this.firstArg;
  }
}
