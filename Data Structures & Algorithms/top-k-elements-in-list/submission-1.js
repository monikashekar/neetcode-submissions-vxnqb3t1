class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let count = {};
        let freq = Array(nums.length + 1).fill().map(() => []);

        for(let n of nums){
            count[n] = (count[n] || 0) + 1;
        }

        for(let n in count){
            freq[count[n]].push(parseInt(n));
        }

        let res = [];
        for(let i = freq.length - 1 ; i > 0; i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length == k){
                    return res;
                }
            }
        }
    }
}
