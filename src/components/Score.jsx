import React from "react";

const Score = props => {
  let scoreTitle = `${props.name}'s score`;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{scoreTitle}</h2>
      <hr />
      <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{props.score}</p>
    </div>
  );
};

export default Score;
