package structural.bridgePatternJava.implementation;

public interface CustomerImplementation {
  
  String getStatus();
  void setStatus(String status);
  int withdrawAll();
  void applyMoney(int amount);
}
