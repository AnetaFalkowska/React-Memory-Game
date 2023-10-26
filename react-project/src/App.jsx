import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import GameSetup from "./components/gameSetup/GameSetup";
import Board from "./components/board/Board";

function App() {
  const [count, setCount] = useState(0);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const gameConfiguration = [];

  return (
    <>
      {!gameIsOn && <GameSetup gameIsOn={gameIsOn} />}
      {/* {gameIsOn && <Board/>}
    {gameIsOver && <Results/>} */}
    </>
  );
}

export default App;
