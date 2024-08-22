function dfsUsingStack(graph, startNode) {
    // Create an empty stack and push the start node into it
    let stack = [];
    stack.push(startNode);

    // Create a Set to store visited nodes
    let visited = new Set();

    // Iterate until the stack is empty
    while (stack.length > 0) {
        // Pop a node from the stack
        let currentNode = stack.pop();

        // If the node has not been visited
        if (!visited.has(currentNode)) {
            // Mark it as visited
            visited.add(currentNode);
            console.log(currentNode);  // Process the node (you can replace this with any other operation)

            // Push all the adjacent nodes of the current node into the stack
            for (let neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
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

dfsUsingStack(graph, 'A');
