class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

      const arr = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
      let i = 0; 
      let j = arr.length - 1;
      while (i < j){
        if(arr[i] !== arr[j]){
            return false;
        }
        i++;
        j--;
      }
    return true;
       
    }
}
