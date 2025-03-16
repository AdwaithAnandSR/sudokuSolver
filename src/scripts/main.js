import { isValidSudoku } from "./validateSudoku.js";
import { backtrackMethod } from "./backTrack.js";
import { checkForExactValue } from "./checkForExactValues.js";

let array;

export const flowController = (setError) => {
	array = [];

	// insert elements to the array
	for (let i = 0; i < 9; i++) {
		let row = [];
		for (let j = 0; j < 9; j++) {
			let item = document.getElementById(`${i}${j}`);
			item.style.background = "white";
			if (item.value != "") {
				item.style.fontWeight = "900";
				row.push(item.value);
			} else row.push(".");
		}
		array.push(row);
	}

	// validating...
	if (!isValidSudoku(array, setError)) return false;

	// trying to find exact values
	let numberOfUnfills = array.flat().filter((item) => item == ".").length;
	for (let i = 0; i < 10; i++) {
		if (array.length > 0) exactValueMethod(array, 0, 0);
		let unFills = array.flat().filter((item) => item == ".").length;
		if (unFills == numberOfUnfills) break;
	}

	// check still the puzzule is incomplete after exact value method
	if (array.flat().includes(".")) backtrackMethod(array, 0, 0);

	// display the result
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			document.getElementById(`${i}${j}`).value = array[i][j];
		}
	}
};

const exactValueMethod = (array, row, col) => {
	if (array[row][col] == ".") checkForExactValue(array, row, col);
	if (col < 8) exactValueMethod(array, row, col + 1);
	else if (row < 8) exactValueMethod(array, row + 1, 0);
};
