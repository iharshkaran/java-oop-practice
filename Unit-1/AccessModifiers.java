// Access Modifiers in Java
// private: Accessible only within the class
class PrivateExample {
    private int data = 10; // private variable

    private void display() { // private method
        System.out.println("Data: " + data);
    }

    public void accessPrivate() { // public method to access private members
        display();
    }
}

// Public: Accessible from anywhere
class PublicExample {
    public int data = 20; // public variable

    public void display() { // public method
        System.out.println("Data: " + data);
    }
}

// Protected: Accessible within the package and by subclasses
class ProtectedExample {
    protected int data = 30; // protected variable
    protected void display() { // protected method
        System.out.println("Data: " + data);
    }
}
// Default (no modifier): Accessible within the package
class DefaultExample {
    int data = 40; // default variable
    void display() { // default method
        System.out.println("Data: " + data);
    }
}
public class AccessModifiers {
    public static void main(String[] args) {
        PrivateExample pe = new PrivateExample();
        pe.accessPrivate();
        PublicExample pub = new PublicExample();
        pub.display();
        ProtectedExample prot = new ProtectedExample();
        prot.display();
        DefaultExample def = new DefaultExample();
        def.display();
    }
}
