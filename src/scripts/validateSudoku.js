export const isValidSudoku = (board) => {
	
	let rowSet = Array.from({ length: 9 }, () => new Set());
	let colSet = Array.from({ length: 9 }, () => new Set());
	let gridSet = Array.from({ length: 9 }, () => new Set());

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			let num = board[row][col];

			if (num !== ".") {
				let gridIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

				if (
					rowSet[row].has(num) ||
					colSet[col].has(num) ||
					gridSet[gridIndex].has(num)
				) {
					document.getElementById(`${row}${col}`).style.background =
						"red";
					return false; // Duplicate found
				}

				rowSet[row].add(num);
				colSet[col].add(num);
				gridSet[gridIndex].add(num);
			}
		}
	}
	return true; // No duplicates found
};
