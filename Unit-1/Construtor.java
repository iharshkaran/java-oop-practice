class Student{
    String name; // Instance Variable
    int age; // Instance Variable
    String school; // Instance Variable

    // Type of Constructor
    // 1. Non-Parameterized Constructor
    Student(){
        name = "Unknown";
        age = 0;
        school = "Unknown";
    }
    // 2. Parameterized Constructor
    Student(String name, int age){
        this.name = name; // this keyword is used to refer to the current object
        this.age = age;
        this.school = "Unknown";
    }
    // 3. Copy Constructor
    Student(Student s){
        this.name = s.name;
        this.age = s.age;
        this.school = s.school;
    }

    // 4. Constructor Overloading
    Student(String name){
        this.name = name;
        this.age = 0;
        this.school = "Unknown";
    }
    Student(int age){
        this.name = "Unknown";
        this.age = age;
        this.school = "Unknown";
    }
    Student(String name, int age, String school){ // Constructor with more parameters
        this.name = name;
        this.age = age;
        this.school = school;
    }

    void display(){
        System.out.println(name+" "+age+" "+school + " " + this.name + " " + this.age + " " + this.school);
    }
}
public class Construtor {
    public static void main(String[] args) {
        Student s1 = new Student(); // Calls Non-Parameterized Constructor
        Student s2 = new Student("Alice", 20); // Calls Parameterized Constructor
        Student s3 = new Student(s2); // Calls Copy Constructor
        Student s4 = new Student("Bob"); // Calls Constructor Overloading
        Student s5 = new Student(25); // Calls Constructor Overloading

        s1.display();
        s2.display();
        s3.display();
        s4.display();
        s5.display();
    }
}
