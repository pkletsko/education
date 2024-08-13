export function BFS_template(grid, point) {
    const rowSize = grid.length;
    const colSize = grid[0].length;


    function getNeighbors(currentRow, currentCol) {
        const delta_row = [-1, 0, 1, 0];
        const delta_col = [0, 1, 0, -1];

        const res = [];
        for (let i = 0; i < delta_row.length; i++) {
            const delta_r = currentRow + delta_row[i];
            const delta_c = currentCol + delta_col[i];
            if (delta_r >=0 && delta_r < rowSize &&  delta_c >= 0 && delta_c < colSize) {
                res.push([delta_r, delta_c]);
            }
        }
        return res;
    }

    function bfs(starting_node){
        const queue = []
        const visited = new Set();

        queue.push(starting_node);
        visited.add(starting_node);

        while(queue.length > 0) {
            const currentNode = queue.shift();

            for(let neighbor of getNeighbors(currentNode)) {
                if(visited.has(neighbor)) {
                    continue;
                }
                // Logic

                queue.push(neighbor);
                visited.add(neighbor);
            }
        }

    }
}
