function bfsUsingQueue(graph, startNode) {
    // Create a queue and enqueue the start node
    let queue = [];
    queue.push(startNode);

    // Create a Set to store visited nodes
    let visited = new Set();
    visited.add(startNode);

    // Iterate until the queue is empty
    while (queue.length > 0) {
        // Dequeue a node from the queue
        let currentNode = queue.shift();
        console.log(currentNode);  // Process the node (you can replace this with any other operation)

        // Enqueue all the adjacent nodes of the current node that have not been visited
        for (let neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example usage:
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

bfsUsingQueue(graph, 'A');
