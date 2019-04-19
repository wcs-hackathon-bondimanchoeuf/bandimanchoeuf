import React from "react";
import { Table } from "reactstrap";
const LastGame = props => {
  return (
    <div style={{ width: "20vw" }}>
      <h3 className="lastScoreTitle text-success">Last Game</h3>

      <Table>
        <thead>
          <tr>
            <th>Player</th>
            <th>{props.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Score</td>
            <td>{props.score}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LastGame;
