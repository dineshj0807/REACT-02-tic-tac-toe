import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currentActivaPlayer) => currentActivaPlayer === "X" ? "O" : "X");
  }
  return (<main>
    <div id='game-container'>
      <ol id='players' className="highlight-player">
        <Player initialName='Player 01' symbol='X' isActive={activePlayer === "X"} />
        <Player initialName='Player 02' symbol='O' isActive={activePlayer === "O"} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </div>
    </main>
  );
}

export default App
