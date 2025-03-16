import React from "react";
import { flowController } from "../scripts/main.js";

const SudokuBoard = () => {
	const [error, setError] = React.useState(" ");

	const gridIds = Array.from({ length: 9 }, (_, i) => i); // 9 grids
	const cellIds = Array.from({ length: 9 }, (_, i) => i); // 9 cells per grid

	return (
		<div>
			<div id="board">
				{gridIds.map((gridIndex) => (
					<div
						key={gridIndex}
						className={`grid grid${gridIndex + 1}`}>
						{cellIds.map((cellIndex) => {
							const row =
								Math.floor(gridIndex / 3) * 3 +
								Math.floor(cellIndex / 3);
							const col = (gridIndex % 3) * 3 + (cellIndex % 3);
							return (
								<input
									key={`${row}${col}`}
									id={`${row}${col}`}
									onChange={(e) => {
										if (e.target.value.length > 1)
											e.target.value =
												e.target.value.slice(0, 1);
									}}
									type="number"
									className="cell"
								/>
							);
						})}
					</div>
				))}
			</div>

			<div id="error">{error}</div>

			<button id="runBtn" onClick={() => flowController(setError)}>
				Solve Puzzle
			</button>

			<style jsx>{`
				#board {
					width: 95vw;
					height: 90vw;
					border: 2px solid black;
					margin: 5% auto;
					overflow: hidden;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-template-rows: repeat(3, 1fr);
					padding: 0;
				}
				.grid {
					width: 100%;
					height: 100%;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					padding: 0;
				}
				.cell {
					width: 100%;
					height: 100%;
					color: black;
					border: 1px solid black;
					text-align: center;
					font-size: 1.5rem;
					font-weight: normal;
					outline: none;
					caret-color: transparent;
					padding: 0;
				}
				.grid2,
				.grid3,
				.grid5,
				.grid6,
				.grid8,
				.grid9 {
					border-left: 2px solid black;
				}
				.grid4,
				.grid5,
				.grid6,
				.grid7,
				.grid8,
				.grid9 {
					border-top: 2px solid black;
				}
				input:focus {
					background: #e1e1e1;
				}
				#runBtn {
					width: 60%;
					height: 6vh;
					border-radius: 3vw;
					margin: 5% 20%;
					border: 1px solid black;
					background-color: #09c909;
					color: white;
					font-size: 1.3rem;
					font-weight: bold;
				}
				#error {
					color: #ec2a2a;
					text-align: center;
					
				}
			`}</style>
		</div>
	);
};

export default SudokuBoard;
