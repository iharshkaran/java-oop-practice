class Student{
    static String school = "ABC School"; //Static Member
}
public class StaticMember {
    public static void main(String[] args){
        Student s1 = new Student();
        System.out.println(s1.school);
    }
}
