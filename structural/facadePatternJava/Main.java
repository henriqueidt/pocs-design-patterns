package structural.facadePatternJava;

public class Main {
    public static void main(String[] args) {
        BankFacade bankFacade = new BankFacade();
        String fromAccountId = bankFacade.addAccount();
        String toAccountId = bankFacade.addAccount();
        bankFacade.deposit(fromAccountId, 100);
        bankFacade.transferMoney(fromAccountId, toAccountId, 50);
        bankFacade.transferMoney(fromAccountId, toAccountId, 70);
    }
}
