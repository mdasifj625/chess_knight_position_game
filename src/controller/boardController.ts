import readline from 'readline/promises';
import config from '../core/config';

class BoardController {
	private board = config.getFreshBoard();
	private rows = config.rows;
	private columns = config.columns;

	private rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	async initBoard() {
		while (true) {
			this.printBoard(this.board);
			const answer = await this.rl.question(
				`\nEnter the position of knight, Like: b1\t q to quit\n`
			);
			if (answer === 'q') return this.rl.close();

			if (this.isValidInput(answer)) {
				this.updateChessBoard(answer);
				console.log(
					'\n\nHere is the possible moves: ♞ -> current position  * -> possible positions\n'
				);
			} else {
				console.log('Please enter a valid input');
			}
		}
	}

	private printBoard(board: string[][]) {
		console.log('\n     A   B   C   D   E   F   G   H');
		console.log('   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		for (let i = 0; i < 8; i++) {
			let row = `${8 - i} `;
			for (let j = 0; j < 8; j++) {
				row += ` | ${board[i][j]}`;
			}
			row += ' |';
			console.log(row);
			if (i < 7) console.log('   ---------------------------------');
		}
		console.log('   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
	}

	// check the input value is valid or not
	private isValidInput(input: string) {
		if (input.length != 2) return false;
		if (
			!(
				this.columns.includes(input[0].toLowerCase()) &&
				this.rows.includes(parseInt(input[1], 10))
			)
		)
			return false;

		return true;
	}

	// update the board according the latest knight position
	private updateChessBoard(input: string) {
		const columnIndex = config.columns.indexOf(input[0]);
		const rowIndex = config.rows.indexOf(parseInt(input[1], 10));
		const possibleMoves = this.findPossiblePositionsForKnight(
			rowIndex,
			columnIndex
		);
		this.board = config.getFreshBoard();
		this.board[rowIndex][columnIndex] = '♞';
		possibleMoves.forEach((move) => {
			this.board[move.row][move.col] = '*';
		});
	}

	// Define the function to find all possible positions of the knight
	private findPossiblePositionsForKnight(row: number, col: number) {
		const positions = [];
		// Iterate over all possible movements of the knight
		for (const move of config.knightPossibleMoves) {
			const newRow = row + move.row;
			const newCol = col + move.col;
			if (
				newRow >= 0 &&
				newRow < this.rows.length &&
				newCol >= 0 &&
				newCol < this.columns.length
			) {
				positions.push({ row: newRow, col: newCol });
			}
		}
		return positions;
	}
}

export default new BoardController();
