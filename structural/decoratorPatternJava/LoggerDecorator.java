package structural.decoratorPatternJava;

public class LoggerDecorator extends BankEntityDecorator {
  public LoggerDecorator(BankEntity bankEntity) {
    super(bankEntity);
  }

  @Override
  public int withdrawAll() {
    int amount = super.withdrawAll();
    Logger.log(String.format("Withdrawal made %d", amount));
    return amount;
  }
}
