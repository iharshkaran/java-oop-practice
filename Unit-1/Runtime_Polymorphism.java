// Runtime Polymorphism (Method Overloading)
class Addition {
    void add(int a, int b) {
        System.out.println("Sum: " + (a + b));
    }
    void add(int a, int b, int c) {
        System.out.println("Sum: " + (a + b + c));
    }
    void add(String a, String b) {
        System.out.println("Concatenation: " + (a + b));
    }
    void add(double a, double b) {
        System.out.println("Sum: " + (a + b));
    }
}
public class Runtime_Polymorphism {
    public static void main(String[] args) {
        Addition add = new Addition();
        add.add(5, 10);
        add.add(5, 10, 15);
        add.add("Hello ", "World");
        add.add(5.5, 10.5);
    }
}
