import java.util.ArrayList;
public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements to the ArrayList
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");
        fruits.add("grapes");
    
        // Displaying the ArrayList
        System.out.println("Fruits: " + fruits); // [Apple, Banana, Cherry, Date, grapes]

        // Accessing elements
        System.out.println("fruit at index 2 : " + fruits.get(2)); // Cherry

        // Methods of ArrayList
        fruits.set(2, "Mango"); // Update element at index 2
        System.out.println("Updated fruit at index 2 : " + fruits.get(2)); // Mango

        fruits.remove("Banana"); // Remove element by value
        fruits.remove(0); // Remove element by index (removes "Apple")
        System.out.println("Fruits Now: " + fruits); // [Mango, Date, grapes]

        System.out.println("Number of fruits: " + fruits.size()); //3
        
        // printing each fruit using a for-each loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        } 
    }
}
