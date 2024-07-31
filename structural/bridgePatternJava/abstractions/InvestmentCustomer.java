package structural.bridgePatternJava.abstractions;

import structural.bridgePatternJava.implementation.CustomerImplementation;

public class InvestmentCustomer extends Customer {
  public InvestmentCustomer(CustomerImplementation customerImplementation, String name) {
    super(customerImplementation, name);
  }
}
