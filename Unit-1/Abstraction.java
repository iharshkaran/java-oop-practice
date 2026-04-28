// Abstract Class
abstract class Animal {
    void sound(){
        System.out.println("Animal makes a sound");
    }

    abstract void eat(); // no body, must be implemented by subclasses
}

// Interface
interface Pet {
    void play(); // only method declaration, no body

} 

class Dog extends Animal implements Pet {
    void eat() {
        System.out.println("Dog eats dog food");
    }

    public void play() {
        System.out.println("Dog plays with its owner");
    }
}
public class Abstraction {
    public static void main(String[] args){
        Dog d = new Dog();
        d.sound(); // from abstract class Animal
        d.eat(); // from abstract class Animal
        d.play(); // from interface Pet
    }
}