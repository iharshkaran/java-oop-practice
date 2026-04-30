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

        // Accessing elements
        System.out.println("First element: " + fruits.get(0)); // Apple
        System.out.println("Second element: " + fruits.get(1)); // Banana
        System.out.println("Third element: " + fruits.get(2)); // Cherry
        System.out.println("Fourth element: " + fruits.get(3)); // Date
        System.out.println("Fifth element: " + fruits.get(4)); // grapes
        // Removing an element
        fruits.remove(1); // Removes "Banana"

        // Methods of ArrayList
        System.out.println("Size of the ArrayList: " + fruits.size()); // 4
        System.out.println("Is the ArrayList empty? " + fruits.isEmpty()); // false
        System.out.println("Does the ArrayList contain 'Cherry'? " + fruits.contains("Cherry")); // true
        System.out.println("Index of 'Date': " + fruits.indexOf("Date")); // 1          
        // Iterating through the ArrayList
        System.out.println("Elements in the ArrayList:");
        for (String str : fruits) {
            System.out.println(str);
        }
    }
}
