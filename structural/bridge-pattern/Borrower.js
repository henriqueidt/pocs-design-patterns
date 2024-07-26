export class Borrower {
  constructor(account) {
    this.account = account;
  }
  getMoney(value) {
    return this.account.withdraw(value);
  }
  addMoney(value) {
    return this.account.deposit(value);
  }
  transferMoney(value, receiver) {
    console.log(receiver);
    const withdrawResult = this.account.withdraw(value);
    if (withdrawResult.isSuccess) {
      return withdrawResult.message + "\n" + receiver.addMoney(value);
    }
    return withdrawResult.message;
  }
}
