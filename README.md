# React Minesweeper

A modern, responsive implementation of the classic Minesweeper game built with React, TypeScript, and Tailwind CSS. Try it out at [https://ayman5029.github.io/Minesweeper/](https://ayman5029.github.io/Minesweeper/)

![Minesweeper Game](https://i.imgur.com/4zoaONN.png)

## Features

- 🎮 Classic Minesweeper gameplay mechanics
- 🎯 Left-click to reveal cells, right-click to flag mines
- 🏆 High score system with local storage
- ⏱️ Real-time game timer
- 🎨 Modern, responsive design with smooth animations
- 📱 Touch-friendly controls for mobile devices
- 🌙 Clean, minimalist UI with Lucide icons

## Game Rules

1. The board contains hidden mines
2. Left-click a cell to reveal it
3. Right-click to place/remove a flag where you think a mine is
4. Numbers show how many mines are adjacent to a cell
5. Reveal all non-mine cells to win
6. Click a mine, and it's game over!

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Build Tool**: Vite for lightning-fast development
- **Icons**: Lucide React for beautiful, consistent icons
- **State Management**: React Hooks for clean, efficient state handling
- **Deployment**: GitHub Pages

## Local Development

```bash
# Clone the repository
git clone https://github.com/AYMAN5029/Minesweeper.git

# Navigate to project directory
cd Minesweeper

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Cell.tsx        # Individual cell component
│   ├── GameBoard.tsx   # Main game board
│   ├── GameHeader.tsx  # Game stats and controls
│   └── GameStatus.tsx  # Win/lose status display
├── constants/          # Game configuration
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── utils/              # Game logic utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Original Minesweeper game by Microsoft
- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Lucide for the beautiful icons

