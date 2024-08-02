package structural.decoratorPatternJava;

public abstract class BankEntityDecorator implements BankEntity {
  private BankEntity bankEntity;

  public BankEntityDecorator(BankEntity bankEntity) {
    this.bankEntity = bankEntity;
  }

  @Override
  public String getStatus() {
    return bankEntity.getStatus();
  }

  @Override
  public void setStatus(String status) {
    bankEntity.setStatus(status);
  }

  @Override
  public int withdrawAll() {
    return bankEntity.withdrawAll();
  }

  @Override
  public void applyMoney(int amount) {
    bankEntity.applyMoney(amount);
  }
}
