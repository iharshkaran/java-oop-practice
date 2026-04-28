public class ThisKeyword {
    int x; // Instance variable

    ThisKeyword(int x){ // Constructor with parameter
        this.x = x; // Using 'this' to refer to the instance variable
    }

    void display(){
        System.out.println("Value of x: " + x); // Using 'this' to refer to the instance variable
    }

    public static void main(String[] args){
        ThisKeyword tk = new ThisKeyword(10);
        tk.display();
    }
}
