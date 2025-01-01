export type CellState = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
};

export type GameState = {
  board: CellState[][];
  gameOver: boolean;
  gameWon: boolean;
  mineCount: number;
  flagCount: number;
  timeElapsed: number;
  highScore: number;
};