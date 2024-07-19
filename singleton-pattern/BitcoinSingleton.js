export class BitcoinSingleton {
  constructor() {
    if (!BitcoinSingleton.instance) {
      this.history = "";
      BitcoinSingleton.instance = this;
    }
    return BitcoinSingleton.instance;
  }

  transfer(id) {
    this.history += `- ${id}`;
  }

  getHistory() {
    return this.history;
  }
}
