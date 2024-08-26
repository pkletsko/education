/**
 *
 * @param node
 * @param visited
 * @param goal
 * @returns {boolean}
 */
function dfs(node, visited, goal) {
    if(!node) return false;

    if(node.val === goal) {
        return true;
    }

    for(let neighbor of node.getNeighbors()) {
        if(visited.has(neighbor)) continue;
        visited.add(neighbor);

        let isFound = dfs(neighbor, visited, goal);

        if(isFound) return true;
    }

    return false;
}


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    dfs(start) {
        const visited = {};
        const result = [];

        const dfsHelper = (vertex) => {
            if (!vertex) return;

            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor);
                }
            });
        };

        dfsHelper(start);
        return result;
    }
}

// Example usage:
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

const dfsResult = g.dfs('A');
console.log("DFS Traversal:", dfsResult);
// Expected Output: DFS Traversal: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
