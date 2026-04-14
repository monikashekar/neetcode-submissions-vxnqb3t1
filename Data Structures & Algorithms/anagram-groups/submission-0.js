class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = {};

        for(let s of strs){

            let count = new Array(26).fill(0);
            for(let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let signature = count.join(',');
            if(!res[signature]){
                res[signature] = [];
            }
            res[signature].push(s);
        }
        return Object.values(res);
    }
   
}
