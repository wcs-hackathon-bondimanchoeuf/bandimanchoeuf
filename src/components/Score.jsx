import React from "react";

const Score = props => {
  return (
    <div>
      <h2>Score</h2>
      <hr />
      <p>{props.score}</p>
    </div>
  );
};

export default Score;
