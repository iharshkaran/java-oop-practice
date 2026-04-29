class UserDefined extends Exception{
    public UserDefined(String message){
        super(message);
    }
}
public class UserDefinedException {
    public static void main(String[] args) {
        try{
            throw new UserDefined("Custom exception");
        } catch (UserDefined e) {
            System.out.println(e.getMessage());
        }
    }
}