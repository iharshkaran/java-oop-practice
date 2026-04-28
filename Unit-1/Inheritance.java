// Inheritance in Java

class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}
class Car extends Vehicle { // single inheritance
    void run() {
        System.out.println("Car is running");
    }
}
class FourWheeler extends Car { // multi-level inheritance
    void run() {
        System.out.println("Four Wheeler is running");
    }
}
class Bike extends Vehicle { // hierarchical inheritance
    void run() {
        System.out.println("Bike is running");
    }
}


// Multiple inheritance using interfaces
interface Father {
    void show();
}
interface Mother{
    void display();
}
class Child implements Father, Mother { // Multiple inheritance using interfaces
    public void display() {
        System.out.println("from Mother");
    }
    public void show() {
        System.out.println("from Father");
    }
}

// Hybrid Inheritance
class A {
    void methodA() {
        System.out.println("Method A from class A");
    }
}
class B extends A {
    void methodB() {
        System.out.println("Method B from class B");
    }
}
interface C {
    void methodC();
}
class D extends B implements C {
    public void methodC() {
        System.out.println("Method C from interface C");
    }
} 

public class Inheritance {
    public static void main(String[] args){
        Car c = new Car();
        c.run(); // Car's run method

        FourWheeler fw = new FourWheeler();
        fw.run(); // Four Wheeler's run method

        Bike b = new Bike();
        b.run(); // Bike's run method

        Child ch = new Child();
        ch.show(); // from Father
        ch.display(); // from Mother
    }
}
