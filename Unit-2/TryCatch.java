public class TryCatch {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int c = a / b;   // exception (divide by zero)

            System.out.println("Result: " + c);
        } 
        catch (ArithmeticException e) {
            System.out.println("Exception handled: " + e);
        }

        System.out.println("Program continues...");
    }
}
