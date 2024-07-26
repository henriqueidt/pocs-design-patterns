import { Account } from "./Account.js";

export class RiskyAccount extends Account {
  constructor(props) {
    super(props);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return { isSuccess: false, message: "Insufficient funds" };
    }
    const amountToWithdrawPercentage = amount / this.balance;
    if (amountToWithdrawPercentage > 0.5) {
      return {
        isSuccess: false,
        message:
          "Withdrawal limit exceeded. Please contact your bank for assistance.",
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
