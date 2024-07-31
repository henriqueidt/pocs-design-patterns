package structural.bridgePatternJava.implementation;

public class Account implements CustomerImplementation {
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
    return balance;
  }

  @Override
  public void applyMoney(int amount) {
    this.balance += amount;
  }
}
