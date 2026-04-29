public class Finally {
    public static void main(String[] args) {
        try{
            int a = 10;
            int b = 0;
            int c = a / b; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("This block will always execute");
        }
    }
}
