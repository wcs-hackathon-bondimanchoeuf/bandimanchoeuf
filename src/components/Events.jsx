import React from "react";
import style from "./Events.module.css";

const Events = props => {
  let tbody = [];
  tbody = props.events
    .map((event, index) => (
      <tr key={props.eggs[index].id}>
        <td>
          <img
            src={props.eggs[event[0]].image}
            style={{ width: "18px", height: "18px" }}
            alt="egg"
          />
          <img
            src={props.eggs[event[1]].image}
            style={{ width: "18px", height: "18px" }}
            alt="egg"
          />
          <img
            src={props.eggs[event[2]].image}
            style={{ width: "18px", height: "18px" }}
            alt="egg"
          />
        </td>
        <td> Score : {event[3]}</td>
      </tr>
    ))
    .reverse()
    .filter((x, i) => i <= 4);

  return (
    <div className={style.block}>
      <h2 className="text-success">Last events</h2>
      <table
        size="sm"
        style={{
          display: "flex",
          flexDirection: "column-reverse ",
          marginLeft: "25%"
        }}
      >
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
};

export default Events;
