interface A {
    void methodA();
}
interface B {
    void methodB();
}
class C implements A, B {
    public void methodA() {
        System.out.println("Method A from interface A");
    }
    public void methodB() {
        System.out.println("Method B from interface B");
    }
}
public class MultipleInheritanceUsingInterface {
    public static void main(String[] args){
        C c = new C();
        c.methodA();
        c.methodB();
    }
}
