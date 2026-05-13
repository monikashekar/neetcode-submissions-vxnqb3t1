class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
         if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0;

        const dfs = (r, c) => {

            // Out of bounds or water
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                grid[r][c] === "0"
            ) {
                return;
            }

            // Mark visited
            grid[r][c] = "0";

            // Explore all 4 directions
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {

                // Found new island
                if (grid[r][c] === "1") {
                    islands++;
                    dfs(r, c);
                }
            }
        }

        return islands;
    }
}
