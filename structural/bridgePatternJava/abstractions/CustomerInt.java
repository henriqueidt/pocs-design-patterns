package structural.bridgePatternJava.abstractions;

public interface CustomerInt {
  String getName();
  void setName(String name);
  String getStatus();
  void setStatus(String status);
  int withdrawAll();
  void applyMoney(int amount);
}
