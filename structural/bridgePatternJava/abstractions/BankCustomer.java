package structural.bridgePatternJava.abstractions;

import structural.bridgePatternJava.implementation.CustomerImplementation;

public class BankCustomer extends Customer {
  public BankCustomer(CustomerImplementation customerImplementation, String name) {
    super(customerImplementation, name);
  }
}
