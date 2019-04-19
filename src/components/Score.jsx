import React from "react";

const Score = props => {
  let scoreTitle = `${props.name}'s score`;
  return (
    <div>
      <h2>{scoreTitle}</h2>
      <hr />
      <p>{props.score}</p>
    </div>
  );
};

export default Score;
