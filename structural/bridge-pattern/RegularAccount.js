import { Account } from "./Account.js";

export class RegularAccount extends Account {
  constructor(props) {
    super(props);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return {
        isSuccess: false,
        message: "Insufficient funds",
      };
    }
    this.balance -= amount;
    return {
      isSuccess: true,
      message: `Withdraw successful. Balance: ${this.balance}`,
    };
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposit successful. Balance: ${this.balance}`;
  }
}
