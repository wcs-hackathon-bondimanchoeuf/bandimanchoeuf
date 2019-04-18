import React from "react";
import { Col, Row } from "reactstrap";

const Legend = () => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <h3>Legends</h3>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>{" "}
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>{" "}
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>
      </Row>
      <Row>
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>{" "}
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>{" "}
        <Col xs="4">
          <div>XXX - 10 points</div>
        </Col>
      </Row>
    </div>
  );
};

export default Legend;
