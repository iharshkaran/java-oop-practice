public class UncheckedException {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int c = a / b; // This will throw ArithmeticException
        System.out.println("Cannot divide by zero");
    }
}

// Unchecked Exception : Key points
// 1. Checked in Runtime
// 2. No need to handle using try-catch or throws keyword
// 3. Examples: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, etc.
