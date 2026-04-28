class person {
    String name;
    int age;

    person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends person {
    String school;

    Student(String name, int age, String school) {
        super(name, age); // Calling the constructor of the parent class
        this.school = school;
    }

    void display() {
        System.out.println("Name: " + super.name);
        System.out.println("Age: " + super.age);
        System.out.println("School: " + this.school);
    }
}

public class SuperKeyword {
    public static void main(String[] args) {
        Student s = new Student("Alice", 20, "XYZ School");
        s.display();
    }
}
