public class ProceduralProgramming{
    public static void calculateTax(double mySalary){
        double tax = mySalary*0.10;
        System.out.println("Calculated tax is : "+tax);
    }
    public static void main(String[] args){
        double mySalary = 50000;
        calculateTax(mySalary);
    }
}