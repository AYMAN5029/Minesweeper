import React from 'react';

interface GameStatusProps {
  gameOver: boolean;
  gameWon: boolean;
}

const GameStatus: React.FC<GameStatusProps> = ({ gameOver, gameWon }) => {
  if (!gameOver && !gameWon) return null;

  return (
    <div className={`text-xl font-bold ${gameWon ? 'text-green-500' : 'text-red-500'}`}>
      {gameWon ? '🎉 You Won!' : '💥 Game Over!'}
    </div>
  );
};

export default GameStatus;