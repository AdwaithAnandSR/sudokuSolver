export const checkForExactValue = (array, row, col) => {
	let existings = [],
		count = -1;

	// column wise cheking
	for (let i = 0; i < 9; i++) {
		if (array[row][i] != "." && !existings.includes(array[row][i]))
			existings[++count] = array[row][i];
	}

	// row wise cheking
	for (let i = 0; i < 9; i++) {
		if (array[i][col] != "." && !existings.includes(array[i][col]))
			existings[++count] = array[i][col];
	}

	// grid wise cheking
	let rowStart = Math.floor(row / 3) * 3;
	let colStart = Math.floor(col / 3) * 3;
	for (let i = rowStart; i < rowStart + 3; i++) {
		for (let j = colStart; j < colStart + 3; j++) {
			if (array[i][j] != "." && !existings.includes(array[i][j]))
				existings[++count] = array[i][j];
		}
	}

	if (existings.length === 8) {
		let sum = 0,
			max = 45;
		for (let i = 0; i < existings.length; i++) {
			sum = sum + Number(existings[i]);
		}
		array[row][col] = String(max - sum);
		return true;
	} else return false;
};
