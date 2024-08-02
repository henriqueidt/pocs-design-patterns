package structural.decoratorPatternJava;

public class Main {
  public static void main(String[] args) {
    Account account = new Account();

    // deposit money to the original account
    account.applyMoney(2000);

    // other languages like C would let reassign account. Apparently java doesn't
    // account = new LoggerDecorator(account);
    // so we need to create a new one

    LoggerDecorator loggerAccount = new LoggerDecorator(account);
    // loggerAccount.withdrawAll()
    loggerAccount.withdrawAll();
  }
}
