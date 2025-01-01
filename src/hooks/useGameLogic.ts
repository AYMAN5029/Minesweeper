import { useState, useEffect } from 'react';
import { GameState } from '../types/game';
import { createBoard, revealCell, checkWin } from '../utils/gameLogic';
import { ROWS, COLS, MINES } from '../constants/gameConfig';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: createBoard(ROWS, COLS, MINES),
    gameOver: false,
    gameWon: false,
    mineCount: MINES,
    flagCount: 0,
    timeElapsed: 0,
    highScore: parseInt(localStorage.getItem('minesweeper_highscore') || '0'),
  });

  useEffect(() => {
    let timer: number;
    if (!gameState.gameOver && !gameState.gameWon) {
      timer = window.setInterval(() => {
        setGameState(prev => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.gameOver, gameState.gameWon]);

  const handleCellClick = (row: number, col: number) => {
    if (gameState.gameOver || gameState.gameWon) return;

    const cell = gameState.board[row][col];
    if (cell.isFlagged) return;

    let newBoard = revealCell(gameState.board, row, col);
    let gameOver = false;
    let gameWon = false;

    if (cell.isMine) {
      gameOver = true;
      newBoard = newBoard.map(row => row.map(cell => ({ ...cell, isRevealed: true })));
    } else {
      gameWon = checkWin(newBoard);
      if (gameWon) {
        const newHighScore = Math.max(1000 - gameState.timeElapsed, 0);
        if (newHighScore > gameState.highScore) {
          localStorage.setItem('minesweeper_highscore', newHighScore.toString());
          setGameState(prev => ({ ...prev, highScore: newHighScore }));
        }
      }
    }

    setGameState(prev => ({
      ...prev,
      board: newBoard,
      gameOver,
      gameWon,
    }));
  };

  const handleRightClick = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (gameState.gameOver || gameState.gameWon) return;

    const newBoard = [...gameState.board];
    const cell = newBoard[row][col];
    if (!cell.isRevealed) {
      cell.isFlagged = !cell.isFlagged;
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        flagCount: prev.flagCount + (cell.isFlagged ? 1 : -1),
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      board: createBoard(ROWS, COLS, MINES),
      gameOver: false,
      gameWon: false,
      mineCount: MINES,
      flagCount: 0,
      timeElapsed: 0,
      highScore: gameState.highScore,
    });
  };

  return {
    gameState,
    handleCellClick,
    handleRightClick,
    resetGame,
  };
};