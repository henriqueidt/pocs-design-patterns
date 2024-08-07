package structural.facadePatternJava;

public class BankFacade {
  private AccountManagerFacade accountManagerFacade;
  private Logger logger;

  public BankFacade() {
    accountManagerFacade = new AccountManagerFacade();
    logger = new Logger();
  }

  public String addAccount() {
    return accountManagerFacade.addAccount();
  }

  public void deposit(String accountId, int amount) {
    accountManagerFacade.deposit(accountId, amount);
    logger.log("Deposited amount: " + amount);
  }

  public boolean transferMoney(String fromAccountId, String toAccountId, int amount) {
    if (accountManagerFacade.withdraw(fromAccountId, amount)) {
      accountManagerFacade.deposit(toAccountId, amount);
      logger.log("Transfered amount: " + amount);
      return true;
    }

    logger.log("Transfer failed due to insufficient balance");
    return false;
  }
}
