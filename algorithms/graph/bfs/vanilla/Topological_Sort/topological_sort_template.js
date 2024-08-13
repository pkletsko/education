function topologicalSort(graph) {
    function findInDegree(graph) {
        const inDegree = new Map();

        for(let node of graph.keys()) {
            inDegree.set(node, 0);
        }

        for(let node of graph.keys()) {
            for(let neighbor of graph.get(node)) {
                inDegree.set(node, neighbor.get(node) + 1);
            }
        }
    }

    function bfs(graph) {
        const res = [];
        const queue = [];

        const inDegree = findInDegree(graph);

        for (let node of inDegree.keys()) {
            if (inDegree.get(node) == 0) {
                queue.push(node);
            }
        }

        while (queue.length > 0) {
            const node = queue.shift();

            res.push(node);

            for (let neighbor of graph.get(node)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
        return (graph.size === res.length) ? res : null;
    }

}

/**
 * @param {string[]} nodes example ["a", "b", "c", "d"]
 * @param {string[][]} nodeConnections example [["a", "b"], ["c", "b"], ["b", "d"]]
 * @return {Map<any, any>}
 */
function buildGraphForTopologicalSort(nodes, nodeConnections) {
    const graph = new Map();

    for (let node of nodes) {
        graph.set(node, []);
    }

    for (let connection of nodeConnections) {
        graph.get(connection[0]).push(connection[1]);
    }

    return graph;
}
