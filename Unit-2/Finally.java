public class Finally {
    public static void main(String[] args) {

        try {
            int a = 10;
            int b = 0;
            int c = a / b;   // exception

            System.out.println(c);
        } 
        catch (ArithmeticException e) {
            System.out.println("Exception handled");
        } 
        finally {
            System.out.println("Finally block always executes");
        }

        System.out.println("Program continues...");
    }
}
