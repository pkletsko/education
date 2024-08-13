export function shortestPathBetweenAandB_2(graph, pointA, pointB) {
    function getNeighbors(node) {
        return graph[node];
    }

    function bfs(root, target) {
        let level = 0;

        const queue = [];
        const visited = new Set();

        queue.push(root)
        visited.add(root);

        while (queue.length > 0) {
            let currentLevelSize = queue.length;

            for (let i = 0; i < currentLevelSize; i++) {
                const currentPoint = queue.shift();

                if (currentPoint === target) {
                    return level;
                }

                for (const neighbor of getNeighbors(currentPoint)) {
                    if (visited.has(neighbor)) {
                        continue;
                    }

                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
            level++;
        }
    }
    return bfs(pointA, pointB);
}
