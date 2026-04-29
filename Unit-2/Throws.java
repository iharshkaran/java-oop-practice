import java.io.File;

class Demo{
    void readfile() = throws IOException{ // method signature with throws keyword
        FileReader fr = new FileReader("abc.txt");
    } 
}
public class Throws {
    public static void main(String[] args) {
        Demo d = new Demo();
        try {
            d.readfile();
        } catch (IOException e) {
            System.out.println("File not found");
        }

    }
}

// Throws keyword : Key points
// 1. Used to declare that a method may throw an exception
// 2. It is used in method signature
// 3. It does not handle the exception, it just declares it
// 4. It can be used with checked exceptions