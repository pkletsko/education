// This solution is wrong because we are trying to push all array(neighbors) to queue
// if there is one item there than for (let index in currentPointNeighbors) will not get index because currentPointNeighbors is not array anymore

export function shortestPathBetweenAandB_1(graph, pointA, pointB) {
    let level = 0;

    const queue = [];
    const visited = new Set();

    // start from point A
    queue.push(graph[pointA]);
    visited.add(pointA);

    while(queue.length > 0) {
        let currentLevelSize = queue.length;

        for (let i = 0; i < currentLevelSize; i++) {
            const currentPointNeighbors = queue.shift();

            // !! Note currentPointNeighbors will be int instead array if there will be one item
            for (let neighbor of currentPointNeighbors) {
                if (neighbor === pointB) {
                    return level;
                }

                if(visited.has(neighbor)){
                    continue;
                }

                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
        level++;
    }

    return null;
}
