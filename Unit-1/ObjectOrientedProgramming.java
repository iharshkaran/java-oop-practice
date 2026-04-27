class BankAccount{
    double balance; //Data (Attribute)
    void deposit(double amount){ // Behavior (Method)
        balance += amount;
    }
}
public class ObjectOrientedProgramming {
    public static void main(String[] args){
        BankAccount myAcc = new BankAccount();
        myAcc.deposit(500);
        System.out.println(myAcc.balance);
    }
}
