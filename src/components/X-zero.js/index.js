import React, { useState } from "react";
import Squre from "../Square";

const Xzero = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxTurn, setIsxTurn] = useState(true);

  const checkwinner = () => {
    const winnerloggic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerloggic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkwinner();
  const handleclick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isxTurn ? "x" : "O";
    setState(copyState);
    setIsxTurn(!isxTurn);
  };
  const playAgain = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="x-zero-game">
      {isWinner ? (
        <>
          <span>{isWinner} has won </span>
          <p>Made By Dhiraj</p>
        </>
      ) : (
        <>
          <h2>
            {" "}
            Player ={">"} "<span>[ {isxTurn ? "X" : "O"} ]</span>" Turn{" "}
          </h2>
          <div className="x-zero-div">
            <Squre clicked={() => handleclick(0)} value={state[0]} />
            <Squre clicked={() => handleclick(1)} value={state[1]} />
            <Squre clicked={() => handleclick(2)} value={state[2]} />
          </div>
          <div className="x-zero-div">
            <Squre clicked={() => handleclick(3)} value={state[3]} />
            <Squre clicked={() => handleclick(4)} value={state[4]} />
            <Squre clicked={() => handleclick(5)} value={state[5]} />
          </div>
          <div className="x-zero-div">
            <Squre clicked={() => handleclick(6)} value={state[6]} />
            <Squre clicked={() => handleclick(7)} value={state[7]} />
            <Squre clicked={() => handleclick(8)} value={state[8]} />
          </div>
        </>
      )}
      <button onClick={playAgain}>Play again</button>
    </div>
  );
};

export default Xzero;
