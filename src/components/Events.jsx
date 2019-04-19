import React from "react";
import { Table } from "reactstrap";
import style from "./Events.module.css";

const Events = () => {
  return (
    <div className={style.block}>
      <h2>Last events</h2>
      <Table responsive size="sm" hover>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Events;
