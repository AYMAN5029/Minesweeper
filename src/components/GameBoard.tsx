import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import GameHeader from './GameHeader';
import GameStatus from './GameStatus';
import { useGameLogic } from '../hooks/useGameLogic';
import { ROWS, COLS, MINES } from '../constants/gameConfig';

const GameBoard: React.FC = () => {
  const { gameState, handleCellClick, handleRightClick, resetGame } = useGameLogic();

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <GameHeader 
        flagCount={gameState.mineCount - gameState.flagCount}
        timeElapsed={gameState.timeElapsed}
        highScore={gameState.highScore}
        onReset={resetGame}
      />

      <div className="grid gap-1 p-4 bg-white rounded-lg shadow-lg">
        {gameState.board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                cell={cell}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onRightClick={(e) => handleRightClick(e, rowIndex, colIndex)}
                revealed={gameState.gameOver}
              />
            ))}
          </div>
        ))}
      </div>

      <GameStatus gameOver={gameState.gameOver} gameWon={gameState.gameWon} />
    </div>
  );
};

export default GameBoard;