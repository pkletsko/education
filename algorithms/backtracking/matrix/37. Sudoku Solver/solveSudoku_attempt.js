/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function dfs(row, col, ignoreRow, ignoreCol, ignoreSection) {
        if(row < 1 || row > 9 || col < 1 || col > 9
            || ignoreRow.get(row).has(board[row-1][col-1]) ||
            ignoreCol.get(col).has(board[row-1][col-1]) ||
            ignoreSection.get(getSectionNumber(row, col)).has(board[row-1][col-1])
        ) {
            return false;
        }

        if (row === col === 9) {
            return true;
        }

        for(let i = 1; i <= 9 ; i++) {
            board[row-1][col] = i;
            let rightMove = dfs(row, col + 1, ignoreRow, ignoreCol, ignoreSection);
            if (!rightMove) {
                board[row-1][col] = ".";
            }


            let downMove = dfs(row + 1, col, ignoreRow, ignoreCol, ignoreSection);

            if (rightMove || downMove) {
                break;
            }
        }

    }

    function getSectionNumber(row, col) {
        let sectionRow;
        if (row < 4) {
            sectionRow = 1;
        }

        if (row > 3 && row < 7) {
            sectionRow = 2;
        }

        if (row > 6) {
            sectionRow = 3;
        }

        let sectionCol;
        if (col < 4) {
            sectionCol = 1;
        }

        if (col > 3 && col < 7) {
            sectionCol = 2;
        }

        if (col > 6) {
            sectionCol = 3;
        }

        const section = ((sectionRow - 1) * 3 ) + sectionCol;
        return section;
    }

    function createIgnoreMap() {
        const ignoreMap = new Map();
        for(let i = 1; i <= 9; i++) {
            ignoreMap.set(i, new Set());
        }
        return ignoreMap;
    }

    const ignoreRow = createIgnoreMap();
    const ignoreCol = createIgnoreMap();
    const ignoreSection = createIgnoreMap();

    for(let row = 1; row <= 9; row++) {
        for(let col = 1; col <= 9; col++) {
            if(board[row - 1][col - 1] !== ".") {
                ignoreRow.get(row).add(board[row - 1][col - 1]);
                ignoreCol.get(col).add(board[row - 1][col - 1]);
                ignoreSection.get(getSectionNumber(row, col)).add(board[row - 1][col - 1]);
            }
        }
    }

    dfs(1, 1, ignoreRow, ignoreCol, ignoreSection);
};

