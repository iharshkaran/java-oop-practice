import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            int rem = target - nums[i];

            if(m.containsKey(rem)) {
                return new int[]{m.get(rem), i};
            }

            m.put(nums[i], i);
        }

        return new int[]{-1, -1};
    }
}

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] nums = {2, 7, 11, 15};
        int target = 13;

        int[] result = sol.twoSum(nums, target);

        System.out.println(result[0] + " " + result[1]);
    }
}