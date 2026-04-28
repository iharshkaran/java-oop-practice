abstract class Animal{
    abstract void sound(); // abstract method

    void sleep(){ // Non-abstract method
        System.out.println("Sleeping...");
    }
}
class Dog extends Animal{
    void sound(){
        System.out.println("Barking");
    }
}
public class Abstraction {
    public static void main(String[] args){
        Animal dog = new Dog();
        dog.sound();
        dog.sleep();
    }
}
