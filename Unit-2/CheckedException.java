public class CheckedException {
    public static void main(String[] args) {
        try{
            FileReader file  = new FileReader("abc.txt");
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }
}


// Checked Exception : Key points
// 1. Checked in Compile Time
// 2. Must be handled using try-catch or throws keyword
// 3. Examples: IOException, SQLException, ClassNotFoundException, etc.