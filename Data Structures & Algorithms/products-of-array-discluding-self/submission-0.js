class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let n = nums.length; 
        let res = Array(n).fill(1);
        //left prefix
        for(let i = 1; i< n ; i++){
            res[i] = res[i-1] * nums[i-1];
        }
        //right postfix
        let postfix = 1;
        for(let i = n-1; i>=0; i--){
            res[i] =    res[i] * postfix;
            postfix = postfix * nums[i];
        }
        return res;
    }
}
