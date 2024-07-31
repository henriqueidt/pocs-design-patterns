package structural.bridgePatternJava.implementation;

public class Application implements CustomerImplementation {
  private String status;
  private int[] funds;

  public Application() {
    this.status = "New";
    this.funds = new int[0];
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
    int sum = 0;
    for (int i = 0; i < funds.length; i++) {
      sum += funds[i];
    }
    funds = new int[0];
    return sum;
  }

  @Override
  public void applyMoney(int amount) {
    int[] newFunds = new int[this.funds.length + 1];
    System.arraycopy(this.funds, 0, newFunds, 0, this.funds.length);
    newFunds[this.funds.length] = amount;
    this.funds = newFunds;
  }
}
