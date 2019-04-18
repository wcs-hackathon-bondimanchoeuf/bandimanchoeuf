import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Register from "../components/Register.jsx";
import LastGame from "../components/LastGame.jsx";
import Ranking from "../components/Ranking.jsx";

class Home extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col xs="9">
          <Register />
        </Col>
        <Col xs="3">
          <Row>
            <Col xs="12">
              <LastGame />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Ranking />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Home;
