package structural.decoratorPatternJava;

public class Account implements BankEntity {
  private String status;
  private int balance;

  public Account() {
    this.status = "Created";
  }

  @Override
  public String getStatus() {
    return status;
  }

  @Override
  public void setStatus(String status) {
    this.status = status;
  }

  @Override
  public int withdrawAll() {
    int balance = this.balance;
    this.balance = 0;
    return balance;
  }

  @Override
  public void applyMoney(int amount) {
    this.balance += amount;
  }
}