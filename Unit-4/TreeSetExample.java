import java.util.TreeSet;
public class TreeSetExample {
    public static void main(String[] args) {
        // TreeSet is a sorted set that does not allow duplicate elements
        TreeSet<String> treeSet = new TreeSet<>();

        // Adding elements to the TreeSet
        treeSet.add("Apple");
        treeSet.add("Banana");
        treeSet.add("Cherry");
        treeSet.add("Date");
        treeSet.add("grapes");

        // Displaying the TreeSet (will be in sorted order)
        System.out.println("TreeSet: " + treeSet); // [Apple, Banana, Cherry, Date, grapes]

        // Accessing elements (TreeSet does not support get by index)
        System.out.println("First element: " + treeSet.first()); // Apple
        System.out.println("Last element: " + treeSet.last()); // grapes

        // Methods of TreeSet
        System.out.println("Is TreeSet empty? " + treeSet.isEmpty()); // false
        System.out.println("Number of elements in TreeSet: " + treeSet.size()); // 5

        // Removing an element
        treeSet.remove("Banana"); // Removes "Banana"
        System.out.println("TreeSet after removal: " + treeSet); // [Apple, Cherry, Date, grapes]

        // Checking if an element exists
        System.out.println("Does TreeSet contain 'Cherry'? " + treeSet.contains("Cherry")); // true
    }
}
