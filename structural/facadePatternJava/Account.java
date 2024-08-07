package structural.facadePatternJava;

public class Account {
  private String accountId;
  private int balance;

  public Account(String accountId) {
    this.accountId = accountId;
  }

  public String getId() {
    return accountId;
  }

  public int getBalance() {
    return balance;
  }

  public void deposit(int amount) {
    balance += amount;
  }

  public boolean withdraw(int amount) {
    if(balance < amount) {
      return false;
    }
    balance -= amount;
    return true;
  }
}
