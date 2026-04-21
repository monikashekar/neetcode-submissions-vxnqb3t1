class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0; 
        let charSet = new Set();
        let windowSize = 0;

        for(let right = 0; right < s.length ; right++){

            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            windowSize = Math.max(windowSize, (right - left +1));
        }
        return windowSize;
    }
}
