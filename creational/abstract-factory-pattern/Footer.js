export class Footer {
  constructor({ firstArg }) {
    this.firstArg = firstArg;
  }

  build() {
    return this.firstArg;
  }
}
