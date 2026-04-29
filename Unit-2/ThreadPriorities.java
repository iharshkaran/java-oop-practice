class DemoThreadPriority extends Thread{
    public void run(){
        for(int i=0; i<5; i++){
            System.out.println("Thread is running: " + i);
        }
    }
}
public class ThreadPriorities {
    public static void main(String[] args) {
        DemoThreadPriority d1 = new DemoThreadPriority();
        DemoThreadPriority d2 = new DemoThreadPriority();
        DemoThreadPriority d3 = new DemoThreadPriority();

        d1.setPriority(Thread.MIN_PRIORITY); // 1
        d2.setPriority(Thread.NORM_PRIORITY); // 5
        d3.setPriority(Thread.MAX_PRIORITY); // 10

        System.out.println("Thread 1 priority: " + d1.getPriority());
        System.out.println("Thread 2 priority: " + d2.getPriority());
        System.out.println("Thread 3 priority: " + d3.getPriority());
        d1.start();
        d2.start();
        d3.start();
    }
}
