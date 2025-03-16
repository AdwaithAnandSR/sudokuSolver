
document.querySelectorAll(".cell").forEach((cell) => {
	cell.addEventListener("input", (e) => {
		if (e.target.value.length > 1) {
			e.target.value = e.target.value.slice(0, 1);
		}
	})
});

document.querySelectorAll(".keyboardNumbers").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		alert(e.target.value)
	});
});



// for (let i = 0; i < 9; i++) {
// 	for (let j = 0; j < 9; j++) {
// 		let cell = document.createElement("input");
// 		cell.type = "number";
// 		cell.style.background = "red";
// 		cell.style.width = "100%";
// 		cell.classList.add("cell");
// 		board.append(cell);
// 	}
// }
