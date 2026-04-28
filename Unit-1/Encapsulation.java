class Student{
    private int age; //private data

    public void setAge(int a){ // setter
        age = a;
    }
    public int getAge(){ // getter
        return age;
    }
}
public class Encapsulation {
    public static void main(String[] args){
        Student s1 = new Student();
        s1.setAge(20);
        System.out.println(s1.getAge());
    }
}
