export const backtrackMethod = (array, row, col) => {
	if (row == 9) return true;

	let nextRow = row,
		nextCol = col + 1;

	if (nextCol == 9) {
		nextCol = 0;
		nextRow = row + 1;
	}

	if (array[row][col] != ".") {
		return backtrackMethod(array, nextRow, nextCol);
	}

	// place safe digit
	for (let digit = 1; digit <= 9; digit++) {
		if (isSafe(array, row, col, digit)) {
			array[row][col] = String(digit);
			if (backtrackMethod(array, nextRow, nextCol)) return true;
			else array[row][col] = ".";
		}
	}
	return false;
};

export const isSafe = (array, row, col, digit) => {
	// horizontal check
	for (let i = 0; i < 9; i++) {
		if (array[row][i] == digit) return false;
	}

	// vertical check
	for (let i = 0; i < 9; i++) {
		if (array[i][col] == digit) return false;
	}

	// grid check
	let rowStart = Math.floor(row / 3) * 3;
	let colStart = Math.floor(col / 3) * 3;
	for (let i = rowStart; i < rowStart + 3; i++) {
		for (let j = colStart; j < colStart + 3; j++) {
			if (array[i][j] == digit) return false;
		}
	}

	return true;
};
