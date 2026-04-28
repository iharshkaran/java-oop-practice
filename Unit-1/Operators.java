public class Operators {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;

        // Arithmetic Operators
        System.out.println("a + b = " + (a + b)); // Addition
        System.out.println("a - b = " + (a - b)); // Subtraction
        System.out.println("a * b = " + (a * b)); // Multiplication
        System.out.println("a / b = " + (a / b)); // Division
        System.out.println("a % b = " + (a % b)); // Modulus

        // Relational Operators
        System.out.println("a > b: " + (a > b)); // Greater than
        System.out.println("a < b: " + (a < b)); // Less than
        System.out.println("a == b: " + (a == b)); // Equal to
        System.out.println("a != b: " + (a != b)); // Not equal to

        // Logical Operators
        boolean x = true;
        boolean y = false;
        System.out.println("x && y: " + (x && y)); // Logical AND
        System.out.println("x || y: " + (x || y)); // Logical OR
        System.out.println("!x: " + (!x)); // Logical NOT

        // Assignment Operators
        int c = 10;
        c += 5; // c = c + 5
        System.out.println("c after += 5: " + c);
        c -= 3; // c = c - 3
        System.out.println("c after -= 3: " + c);
        c *= 2; // c = c * 2
        System.out.println("c after *= 2: " + c);

        // Bitwise Operators
        int m = 5; // 0101 in binary
        int n = 3; // 0011 in binary
        System.out.println("m & n: " + (m & n)); // Bitwise AND
        System.out.println("m | n: " + (m | n)); // Bitwise OR
        System.out.println("m ^ n: " + (m ^ n)); // Bitwise XOR
        System.out.println("~m: " + (~m)); // Bitwise NOT
        System.out.println("m << 1: " + (m << 1)); // Left shift
        System.out.println("m >> 1: " + (m >> 1)); // Right shift
        System.out.println("m >>> 1: " + (m >>> 1)); // Unsigned right shift

        // Unary Operators
        int d = 10;
        System.out.println("d++: " + (d++)); // Post-increment
        System.out.println("d: " + d); // d is now 11
        System.out.println("++d: " + (++d)); // Pre-increment
        System.out.println("d: " + d); // d is now 12
        System.out.println("d--: " + (d--)); // Post-decrement
        System.out.println("d: " + d); // d is now 11
        System.out.println("--d: " + (--d)); // Pre-decrement
        System.out.println("d: " + d); // d is now 10

        // Ternary Operator
        int e = (a > b) ? a : b; // If a > b
        System.out.println("Ternary Operator Result: " + e);
        
    }
}
