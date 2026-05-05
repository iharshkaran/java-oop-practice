import java.util.HashMap;
public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();

        // Adding key-value pairs to the HashMap
        map.put("Apple", 1);
        map.put("Banana", 2);
        map.put("Cherry", 3);
        map.put("Date", 4);
        map.put("grapes", 5);

        // Displaying the HashMap
        System.out.println("HashMap: " + map); // {Apple=1, Banana=2, Cherry=3, Date=4, grapes=5}

        // Accessing values using keys
        System.out.println("Value for key 'Cherry': " + map.get("Cherry")); // 3

        // Updating a value
        map.put("Cherry", 10); // Update value for key "Cherry"
        System.out.println("Updated value for key 'Cherry': " + map.get("Cherry")); // 10

        // Removing a key-value pair
        map.remove("Banana"); // Remove key "Banana"
        System.out.println("HashMap after removing 'Banana': " + map); // {Apple=1, Cherry=10, Date=4, grapes=5}

        System.out.println("Number of key-value pairs in HashMap: " + map.size()); //4

        // checking if a key exists
        System.out.println("Does key 'Date' exist? " + map.containsKey("Date")); // true

        // checking if a value exists
        System.out.println("Does value 5 exist? " + map.containsValue(5)); // true

        // keySet() method to get all keys
        System.out.println("Keys in HashMap: " + map.keySet()); // [Apple, Cherry, Date, grapes]

        // values() method to get all values
        System.out.println("Values in HashMap: " + map.values()); // [1, 10, 4, 5]

        // entrySet() method to get all key-value pairs
        System.out.println("Key-Value pairs in HashMap: " + map.entrySet()); // [Apple=1, Cherry=10, Date=4, grapes=5]
    }
}
