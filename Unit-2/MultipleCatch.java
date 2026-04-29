public class MultipleCatch {
    public static void main(String[] args) {

        try {
            int a = 10;
            int b = 0;
            int c = a / b;   // ArithmeticException

            int arr[] = new int[5];
            arr[10] = 50;    // ArrayIndexOutOfBoundsException
        }

        catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception handled");
        }

        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Exception handled");
        }

        catch (Exception e) {
            System.out.println("General Exception handled");
        }

        System.out.println("Program continues...");
    }
}
