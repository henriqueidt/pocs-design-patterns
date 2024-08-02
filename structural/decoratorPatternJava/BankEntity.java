package structural.decoratorPatternJava;

public interface BankEntity {
  String getStatus();
  void setStatus(String status);
  int withdrawAll();
  void applyMoney(int amount);
}
