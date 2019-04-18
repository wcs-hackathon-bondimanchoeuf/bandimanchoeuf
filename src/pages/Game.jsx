import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Gambling from "../components/Gambling.jsx";
import Legend from "../components/Legend.jsx";
import Score from "../components/Score.jsx";
import Events from "../components/Events.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 50
    };
  }

  handleClickTryAgain = event => {
    this.setState({ score: 100 });
  };

  render() {
    return (
      <Row>
        <Col xs="9">
          <Row>
            <Col>
              <Gambling onClickTryAgain={this.handleClickTryAgain} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Legend />
            </Col>
          </Row>
        </Col>
        <Col xs="3">
          <Row>
            <Col xs="12">
              <Score score={this.state.score} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Events />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Game;
