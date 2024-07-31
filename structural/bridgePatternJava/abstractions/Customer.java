package structural.bridgePatternJava.abstractions;

import structural.bridgePatternJava.implementation.CustomerImplementation;

public class Customer implements CustomerInt {
  protected CustomerImplementation customerImplementation;
  private String name;

  public Customer(CustomerImplementation customerImplementation, String name) {
    this.customerImplementation = customerImplementation;
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
   this.name = name;
  }

  public String getStatus() {
    return customerImplementation.getStatus();
  }

  public void setStatus(String status) {
    customerImplementation.setStatus(status);
  }

  public int withdrawAll() {
    return customerImplementation.withdrawAll();
  }

  public void applyMoney(int amount) {
    customerImplementation.applyMoney(amount);
  }
}
