class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        let map1 = new Map();
        let map2 = new Map();

        let array1 = s.split('');
        let array2 = t.split('');

        for(let i=0; i < array1.length ; i++){
            if(map1.has(array1[i])){
                map1.set(array1[i], map1.get(array1[i])+1);
            }else{
                    map1.set(array1[i], 1)
            }
            
        }

        for(let i=0; i < array2.length ; i++){
            if(map2.has(array2[i])){
                map2.set(array2[i], map2.get(array2[i])+1);
            }
            else{
                map2.set(array2[i], 1)
            }
            
        }

        for (let [key, value] of map1) {
            if(map2.get(key) !== value){
                return false;
            }
        }

        return true;


    }
}
