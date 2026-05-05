import java.util.HashSet;
public class HashSetExample {

    public static void main(String[] args) {
        HashSet<String> fruits = new HashSet<>();

        // Adding elements to the HashSet
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Date");
        fruits.add("grapes");

        // Displaying the HashSet
        System.out.println("Fruits: " + fruits); // [Apple, Banana, Cherry, Date, grapes]

        // Accessing elements (HashSet does not maintain order, so we cannot access by index)
        System.out.println("Is 'Cherry' in the set? " + fruits.contains("Cherry")); // true

        // Methods of HashSet
        fruits.remove("Banana"); // Remove element by value
        System.out.println("Fruits Now: " + fruits); // [Apple, Cherry, Date, grapes]

        System.out.println("Number of fruits: " + fruits.size()); //4
        
        // printing each fruit using a for-each loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
