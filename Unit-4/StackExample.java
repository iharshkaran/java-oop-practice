import java.util.Stack;
public class StackExample {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();

        // Pushing elements onto the stack
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");
        stack.push("Date");
        stack.push("grapes");

        // Displaying the stack
        System.out.println("Stack: " + stack); // [Apple, Banana, Cherry, Date, grapes]

        // Accessing the top element
        System.out.println("Top element: " + stack.peek()); // grapes

        // Popping elements from the stack
        System.out.println("Popped element: " + stack.pop()); // grapes
        System.out.println("Stack after pop: " + stack); // [Apple, Banana, Cherry, Date]

        System.out.println("Number of elements in stack: " + stack.size()); //4
        System.out.println("Is stack empty? " + stack.isEmpty()); // false
        System.out.println(stack.search(stack.peek())); // 4 (position of top element)
        // printing each element in the stack using a for-each loop
        for (String element : stack) {
            System.out.println(element);
        }
    }
}
