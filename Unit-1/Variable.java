class Student{
    String name; // instance Variable
    static String school = "ABC School"; // Static Variable
    void display(){
        int marks = 90; // Local Variable;
        System.out.println("| " + name + ", " + marks + ", " + school + " |");
    }     
}
public class Variable {
    public static void main(String[] args){
        String greet = "Radhe Radhe";
        System.out.println("| " + greet + " |");
        Student s = new Student();
        s.name = "Abhay Thakur";
        s.display();
    }
}
