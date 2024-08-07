package structural.facadePatternJava;

import java.util.HashMap;

public class AccountManagerFacade {
  private static HashMap<String, Account> accounts = new HashMap<String, Account>();

  public AccountManagerFacade() {}

  public String addAccount() {
    String accountId = java.util.UUID.randomUUID().toString();
    Account newAccount = new Account(accountId);
    accounts.put(accountId, newAccount);
    return accountId;
  }

  public static Account getAccount(String accountId) {
    return accounts.get(accountId);
  }

  public void deposit(String accountId, int amount) {
    Account account = getAccount(accountId);
    account.deposit(amount);
  }

  public boolean withdraw(String accountId, int amount) {
    Account account = getAccount(accountId);
    return account.withdraw(amount);
  }
}
