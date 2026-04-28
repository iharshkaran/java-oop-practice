class Student{
    // Instance Members
    String name; 
    int age;
    void display(){ // Instance Method
        System.out.println(name+" "+age);
    }
}
public class InstanceMember {
    public static void main(String[] args){
        Student s1 = new Student();
        s1.name = "Arjun";
        s1.age = 20;
        Student s2 = new Student();
        s2.name = "Anmol";
        s2.age = 21;

        s1.display();
        s2.display();
    }
}
