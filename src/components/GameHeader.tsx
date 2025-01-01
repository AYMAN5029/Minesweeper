import React from 'react';
import { Flag, Clock, Trophy, RefreshCw } from 'lucide-react';

interface GameHeaderProps {
  flagCount: number;
  timeElapsed: number;
  highScore: number;
  onReset: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ 
  flagCount, 
  timeElapsed, 
  highScore, 
  onReset 
}) => {
  return (
    <div className="flex items-center gap-8 text-gray-700">
      <div className="flex items-center gap-2">
        <Flag className="w-5 h-5" />
        <span>{flagCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span>{timeElapsed}s</span>
      </div>
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <span>{highScore}</span>
      </div>
      <button
        onClick={onReset}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
      </button>
    </div>
  );
};

export default GameHeader;