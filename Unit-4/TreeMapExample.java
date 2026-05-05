import java.util.TreeMap;
public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<String, Integer> fruits = new TreeMap<>();
        
        // Adding key-value pairs to the HashMap
        fruits.put("Apple", 1);
        fruits.put("Banana", 2);
        fruits.put("Cherry", 3);
        fruits.put("Date", 4);
        fruits.put("grapes", 5);

        // Displaying the TreeMap
        System.out.println("TreeMap: " + fruits); // {Apple=1, Banana=2, Cherry=3, Date=4, grapes=5}

        // Accessing values using keys
        System.out.println("Value for key 'Cherry': " + fruits.get("Cherry")); // 3

        // Updating a value
        fruits.put("Cherry", 10); // Update value for key "Cherry"
        System.out.println("Updated value for key 'Cherry': " + fruits.get("Cherry")); // 10
        // Removing a key-value pair
        fruits.remove("Banana"); // Remove key "Banana"
        System.out.println("TreeMap after removing 'Banana': " + fruits); // {Apple=1, Cherry=10, Date=4, grapes=5}

        System.out.println("Number of key-value pairs in TreeMap: " + fruits.size()); //4

        // checking if a key exists
        System.out.println("Does key 'Date' exist? " + fruits.containsKey("Date")); // true

        // checking if a value exists
        System.out.println("Does value 5 exist? " + fruits.containsValue(5)); // true

        // keySet() method to get all keys
        System.out.println("Keys in TreeMap: " + fruits.keySet()); // [Apple, Cherry, Date, grapes]

        // values() method to get all values
        System.out.println("Values in TreeMap: " + fruits.values()); // [1, 10, 4, 5]

        // entrySet() method to get all key-value pairs
        System.out.println("Key-Value pairs in TreeMap: " + fruits.entrySet()); // [Apple=1, Cherry=10, Date=4, grapes=5]
    }
}


// TreeMap key Points:
// 1. TreeMap is a part of the Java Collections Framework and implements the Map interface.
// 2. It stores key-value pairs in a sorted order based on the natural ordering of the keys or by a specified comparator.
// 3. TreeMap does not allow null keys but allows null values.
// 4. It provides log(n) time complexity for basic operations like get, put, and remove.
// 5. TreeMap is not synchronized, so it is not thread-safe. If:
// 6. You need a thread-safe version of TreeMap, you can use Collections.synchronizedMap() to wrap it.
// 7. same key can not be added twice in TreeMap, if you try to add a duplicate key, it will overwrite the existing value associated with that key.