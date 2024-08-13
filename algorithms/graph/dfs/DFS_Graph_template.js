export function DFS_Graph_template(starNode) {
    const visited = new Set();

    function getNeighbors(node) {
        return [];
    }

    function dfs(node) {
        if(!node) return;

        for (const neighbor of getNeighbors(node)) {
            if (visited.has(neighbor)) {
                continue;
            }

            visited.add(neighbor);
            dfs(neighbor);
        }
    }

    return dfs(starNode);
}


