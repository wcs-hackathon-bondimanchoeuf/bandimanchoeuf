import React from "react";

const LastGame = props => {
  return (
    <div>
      <h3>Last Game</h3>
      <p>Player : {props.name}</p>
      <p>Score : {props.score}</p>
    </div>
  );
};

export default LastGame;
