/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
export function floodFill(image, sr, sc, color) {

    const rowSize = image.length;
    const colSize = image[0].length

    const originalColor = image[sr][sc];

    function getNeighbor(current_row, current_col) {
        const delta_row = [-1,0,1,0];
        const delta_col = [0,1,0,-1];

        const res = [];

        for(let i = 0; i < delta_row.length; i++) {
            const new_row = current_row + delta_row[i];
            const new_col = current_col + delta_col[i];

            if (new_row >= 0 && new_row < rowSize && new_col >= 0 && new_col < colSize) {
                res.push([new_row, new_col]);
            }
        }
        return res;
    }

    function bfs(start_row, start_col) {
        const queue = [];
        const visited = new Set();

        queue.push([start_row, start_col]);
        visited.add(start_row + "_" + start_col);
        image[start_row][start_col] = color;

        while (queue.length > 0) {
            const currentPoint = queue.shift();

            for(let neighbor of getNeighbor(currentPoint[0], currentPoint[1])) {
                if (visited.has(neighbor[0] + "_" + neighbor[1])) {
                    continue;
                }

                if(image[neighbor[0]][neighbor[1]] === originalColor) {
                    queue.push([neighbor[0], neighbor[1]]);
                    visited.add(neighbor[0] + "_" + neighbor[1]);
                    image[neighbor[0]][neighbor[1]] = color;
                }


            }


        }

    }

    bfs(sr, sc);

    return image;
}
