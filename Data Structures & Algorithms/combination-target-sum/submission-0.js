class Solution {
 
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum(candidates, target) {
        let res = [];

        function dfs(i, cur, total) {

            // Base case: found valid combination
            if (total === target) {
                res.push([...cur]);
                return;
            }

            // Base case: out of bounds or exceeded target
            if (i >= candidates.length || total > target) {
                return;
            }

            // Include current number
            cur.push(candidates[i]);
            dfs(i, cur, total + candidates[i]);

            // Backtrack
            cur.pop();

            // Skip current number
            dfs(i + 1, cur, total);
        }

        dfs(0, [], 0);
        return res;
    }
}

