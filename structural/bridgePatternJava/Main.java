
package structural.bridgePatternJava;

import structural.bridgePatternJava.abstractions.BankCustomer;
import structural.bridgePatternJava.abstractions.InvestmentCustomer;
import structural.bridgePatternJava.implementation.Account;
import structural.bridgePatternJava.implementation.Application;

class Main {
    public static void main(String[] args) {
      BankCustomer bankCustomer = new BankCustomer(new Account(), "Tyrion Lannister");

      System.out.println("--------------------------");

      System.out.println(bankCustomer.getName());

      bankCustomer.setName("Arya Stark");
      System.out.println(bankCustomer.getName());
      System.out.println(bankCustomer.getStatus());
      bankCustomer.applyMoney(1000);
      System.out.println(bankCustomer.withdrawAll());

      System.out.println("--------------------------");

      InvestmentCustomer investmentCustomer = new InvestmentCustomer(new Application(), "Samwell Tarly");
      System.out.println(investmentCustomer.getName());
      System.out.println(investmentCustomer.getStatus());
      investmentCustomer.applyMoney(1000);
      investmentCustomer.applyMoney(3000);
      System.out.println(investmentCustomer.withdrawAll());
    }
}