class Config {
	private board = [
		[' ', '.', ' ', '.', ' ', '.', ' ', '.'],
		['.', ' ', '.', ' ', '.', ' ', '.', ' '],
		[' ', '.', ' ', '.', ' ', '.', ' ', '.'],
		['.', ' ', '.', ' ', '.', ' ', '.', ' '],
		[' ', '.', ' ', '.', ' ', '.', ' ', '.'],
		['.', ' ', '.', ' ', '.', ' ', '.', ' '],
		[' ', '.', ' ', '.', ' ', '.', ' ', '.'],
		['.', ' ', '.', ' ', '.', ' ', '.', ' '],
	];
	knightPossibleMoves = [
		{ row: -2, col: -1 },
		{ row: -2, col: 1 },
		{ row: -1, col: -2 },
		{ row: -1, col: 2 },
		{ row: 1, col: -2 },
		{ row: 1, col: 2 },
		{ row: 2, col: -1 },
		{ row: 2, col: 1 },
	];
	columns = 'abcdefgh';
	rows = [8, 7, 6, 5, 4, 3, 2, 1];
	getFreshBoard() {
		return JSON.parse(JSON.stringify(this.board));
	}
}
export default new Config();
