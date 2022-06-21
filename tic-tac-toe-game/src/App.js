import logo from './logo.svg';
import './App.css';
import GameField from './GameField';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const winner = getWinner(history[step]);
  const who = isXNext ? 'X' : '0';
  const jumpTo = (step) => {
    setStep(step);
    setIsXNext(step % 2 === 0);
  };
  const handleClick = (i) => {
    const historyPoint = history.slice(0, step + 1);
    const current = historyPoint[step];
    const cells = [...current];
    // return if won or occupied
    if (winner || cells[i]) return;
    // select square
    cells[i] = who;
    setHistory([...historyPoint, cells]);
    setStep(historyPoint.length);
    setIsXNext(!isXNext);
  };
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return (
    <div className="App">
      <GameField cells={history[step]} onClick={handleClick}></GameField>
      <div>
        <h5>History: </h5>
        {renderMoves()}
      </div>
      <h2>{winner ? "Winner: " + winner : " Next Player: " + who}</h2>
    </div>
  );
}

function getWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default App;
