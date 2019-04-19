import React from "react";
import { Table } from "reactstrap";
import style from "./Events.module.css";

const Events = props => {
  console.log("events props");
  console.log(props);

  let tbody = [];
  tbody = props.events
    .map(event => (
      <tr>
        <td>
          <img
            src={props.eggs[event[0]].image}
            style={{ width: "18px", height: "18px" }}
          />
          <img
            src={props.eggs[event[1]].image}
            style={{ width: "18px", height: "18px" }}
          />
          <img
            src={props.eggs[event[2]].image}
            style={{ width: "18px", height: "18px" }}
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
        hover
        style={{
          display: "flex",
          flexDirection: "column-reverse ",
          marginLeft: "25%"
        }}
      >
        <tbody>
          {tbody}
          {/* <EventCell {...props} /> */}
        </tbody>
      </table>
    </div>
  );
};

export default Events;

// return (
//   <tr>
//     <td>
//       <img src={props.eggs[0]} style={{ width: '18px' }} alt='An Egg' />
//     </td>
//     <td>Table cell</td>
//   </tr>
// );
