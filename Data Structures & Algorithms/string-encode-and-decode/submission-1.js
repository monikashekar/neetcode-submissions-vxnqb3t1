class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let s of strs){
            res+=s.length+'#'+s;

        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("the word:", str)
        let res = [];
        let i=0; 
        while(i < str.length){
            let j = i; 
            while(str[j] !== '#'){
                j++;
            }
            let len = parseInt(str.substring(i,j));
            i = j+1; 
            j = i+len; // start + number of characters
            let word = str.substring(i,j);
            res.push(word);
            i = j;
        }
        return res;
    }
}
