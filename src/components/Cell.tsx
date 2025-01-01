import React from 'react';
import { Flag, Bomb } from 'lucide-react';
import { CellState } from '../types/game';

interface CellProps {
  cell: CellState;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
  revealed: boolean;
}

const Cell: React.FC<CellProps> = ({ cell, onClick, onRightClick, revealed }) => {
  const getCellContent = () => {
    if (cell.isFlagged) return <Flag className="w-4 h-4 text-red-500" />;
    if (!cell.isRevealed && !revealed) return null;
    if (cell.isMine) return <Bomb className="w-4 h-4 text-gray-800 animate-bounce" />;
    if (cell.neighborMines === 0) return null;
    return <span className={`font-bold text-sm ${getNumberColor()}`}>{cell.neighborMines}</span>;
  };

  const getNumberColor = () => {
    const colors = [
      'text-blue-500',
      'text-green-500',
      'text-red-500',
      'text-purple-500',
      'text-yellow-600',
      'text-pink-500',
      'text-teal-500',
      'text-gray-800'
    ];
    return colors[cell.neighborMines - 1] || colors[0];
  };

  return (
    <button
      className={`
        w-8 h-8 border border-gray-300 flex items-center justify-center
        transition-all duration-200 transform hover:scale-105
        ${cell.isRevealed || revealed ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}
        ${cell.isRevealed && cell.isMine ? 'bg-red-100' : ''}
      `}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      {getCellContent()}
    </button>
  );
};

export default Cell;