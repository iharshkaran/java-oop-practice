public class FinalKeyword {
    final int myFinalVar = 10; // Final variable

    final void display(){ // Final method
        System.out.println("This is a final method.");
    }

    public static void main(String[] args){
        FinalKeyword fk = new FinalKeyword();
        System.out.println(fk.myFinalVar);
        fk.display();
    }
}
