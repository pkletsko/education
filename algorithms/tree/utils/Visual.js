export function printBinaryTree(root) {
    if (!root) return "";

    const result = [];
    function dfs(node, prefix = "", isLeft = true) {
        if (node) {
            result.push(prefix + (isLeft ? "├── " : "└── ") + node.val);

            const nextPrefix = prefix + (isLeft ? "│   " : "    ");
            if (node.left || node.right) {
                dfs(node.left, nextPrefix, true);
                dfs(node.right, nextPrefix, false);
            }
        } else {
            result.push(prefix + (isLeft ? "├── " : "└── ") + "null");
        }
    }

    dfs(root, "", false);
    return result.join("\n");
}
