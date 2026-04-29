class DemoThread extends Thread{
    public void run(){
        for(int i=0; i<5; i++){
            System.out.println("Thread is running: " + i);
        }
    }   
}
public class Thread {
    public static void main(String[] args) {
        DemoThread d = new DemoThread();
        d.run(); // Start the thread
    }
}
