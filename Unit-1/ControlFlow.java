public class ControlFlow {
    public static void main(String[] args) {
        int num = 10;

        // If-Else Statement
        if(num > 0){
            System.out.println("Number is positive.");
        } else if(num < 0){
            System.out.println("Number is negative.");
        } else {
            System.out.println("Number is zero.");
        }

        // Switch Statement
        int day = 3;
        switch(day){
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Invalid day");
        }

        // For Loop
        for(int i=0; i<5; i++){
            System.out.println("For Loop iteration: " + i);
        }

        // While Loop
        int count = 0;
        while(count < 5){
            System.out.println("While Loop count: " + count);
            count++;
        }

        // Do-While Loop
        int doCount = 0;
        do {
            System.out.println("Do-While Loop count: " + doCount);
            doCount++;
        } while(doCount < 5);

        // for-each Loop
        int[] arr = {1, 2, 3, 4, 5};
        for(int numInArr : arr){
            System.out.println("For-each Loop number: " + numInArr);    
        }

        // Jump Statements
        
        // Break Statement
        for(int i=0; i<10; i++){
            if(i == 5){
                break; // Exits the loop when i is 5
            }
            System.out.println("Jump Statement iteration: " + i);
        }

        // Continue Statement
        for(int i=0; i<10; i++){
            if(i % 2 == 0){
                continue; // Skips the rest of the loop when i is even
            }
            System.out.println("Continue Statement iteration: " + i);
        }

        // Return Statement
        System.out.println("Return Statement result: " + calculateSquare(5));
    }

    public static int calculateSquare(int n) {
        return n * n;
    }
}
