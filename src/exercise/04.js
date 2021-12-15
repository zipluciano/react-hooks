// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react';
import { useLocalStorageState } from '../utils';

// Ex 4

// function Board() {
//   const [squares, setSquares] = React.useState(Array(9).fill(null));

//   // Variables to evaluate the game status
//   const nextValue = calculateNextValue(squares);
//   const winner = calculateWinner(squares);
//   const status = calculateStatus(winner, squares, nextValue);

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       // Don't make any changes
//       return;
//     }

//     const helperArray = [...squares];
//     helperArray[square] = nextValue;
//     setSquares(helperArray);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//   }

//   function renderSquare(i) {
//     return (
//       <button className='square' onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     );
//   }

//   return (
//     <div>
//       <div className='status'>{status}</div>
//       <div className='board-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className='restart' onClick={restart}>
//         restart
//       </button>
//     </div>
//   );
// }

// function Game() {
//   return (
//     <div className='game'>
//       <div className='game-board'>
//         <Board />
//       </div>
//     </div>
//   );
// }

// // eslint-disable-next-line no-unused-vars
// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`;
// }

// // eslint-disable-next-line no-unused-vars
// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
// }

// // eslint-disable-next-line no-unused-vars
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function App() {
//   return <Game />;
// }

// Ex 4 - extra 1

// function Board() {
//   function getDataLocalStorage() {
//     return localStorage.getItem('squares') === null || undefined
//       ? Array(9).fill(null)
//       : JSON.parse(localStorage.getItem('squares'));
//   }

//   function setDataLocalStorage(array) {
//     const squaresArray = JSON.stringify(array);
//     localStorage.setItem('squares', squaresArray);
//   }

//   const [squares, setSquares] = React.useState(() => getDataLocalStorage());

//   React.useEffect(() => {
//     setDataLocalStorage(squares);
//   }, [squares]);

//   // Variables to evaluate the game status
//   const nextValue = calculateNextValue(squares);
//   const winner = calculateWinner(squares);
//   const status = calculateStatus(winner, squares, nextValue);

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       // Don't make any changes
//       return;
//     }

//     const helperArray = [...squares];
//     helperArray[square] = nextValue;
//     setSquares(helperArray);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//   }

//   function renderSquare(i) {
//     return (
//       <button className='square' onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     );
//   }

//   return (
//     <div>
//       <div className='status'>{status}</div>
//       <div className='board-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className='restart' onClick={restart}>
//         restart
//       </button>
//     </div>
//   );
// }

// function Game() {
//   return (
//     <div className='game'>
//       <div className='game-board'>
//         <Board />
//       </div>
//     </div>
//   );
// }

// // eslint-disable-next-line no-unused-vars
// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`;
// }

// // eslint-disable-next-line no-unused-vars
// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
// }

// // eslint-disable-next-line no-unused-vars
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function App() {
//   return <Game />;
// }

// Ex 4 - extra 2

// function Board() {
//   const [squares, setSquares] = useLocalStorageState(
//     'squares',
//     Array(9).fill(null),
//   );

//   function setDataLocalStorage(array) {
//     const squaresArray = JSON.stringify(array);
//     localStorage.setItem('squares', squaresArray);
//   }

//   React.useEffect(() => {
//     setDataLocalStorage(squares);
//   }, [squares]);

//   // Variables to evaluate the game status
//   const nextValue = calculateNextValue(squares);
//   const winner = calculateWinner(squares);
//   const status = calculateStatus(winner, squares, nextValue);

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       // Don't make any changes
//       return;
//     }

//     const helperArray = [...squares];
//     helperArray[square] = nextValue;
//     setSquares(helperArray);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//   }

//   function renderSquare(i) {
//     return (
//       <button className='square' onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     );
//   }

//   return (
//     <div>
//       <div className='status'>{status}</div>
//       <div className='board-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className='restart' onClick={restart}>
//         restart
//       </button>
//     </div>
//   );
// }

// function Game() {
//   return (
//     <div className='game'>
//       <div className='game-board'>
//         <Board />
//       </div>
//     </div>
//   );
// }

// // eslint-disable-next-line no-unused-vars
// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`;
// }

// // eslint-disable-next-line no-unused-vars
// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
// }

// // eslint-disable-next-line no-unused-vars
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// function App() {
//   return <Game />;
// }

// Ex 4 - extra 3

function Board({ squares, onClick }) {
  function renderSquare(i) {
    return (
      <button className='square' onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  const [history, setHistory] = useLocalStorageState('tic-tac-toe:history', [
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorageState(
    'tic-tac-toe:step',
    0,
  );

  const currentSquares = history[currentStep];
  const winner = calculateWinner(currentSquares);
  const nextValue = calculateNextValue(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);

  function selectSquare(square) {
    if (winner || currentSquares[square]) {
      return;
    }

    const newHistory = history.slice(0, currentStep + 1);
    const squares = [...currentSquares];

    squares[square] = nextValue;
    setHistory([...newHistory, squares]);
    setCurrentStep(newHistory.length);
  }

  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  }

  const moves = history.map((stepSquares, step) => {
    const desc = step ? `Go to move #${step}` : 'Go to game start';
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
          {desc} {isCurrentStep ? '(current)' : null}
        </button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board onClick={selectSquare} squares={currentSquares} />
        <button className='restart' onClick={restart}>
          restart
        </button>
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
