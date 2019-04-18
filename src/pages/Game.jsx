import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import Gambling from "../components/Gambling.jsx";
import Legend from "../components/Legend.jsx";
import Score from "../components/Score.jsx";
import Events from "../components/Events.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 50,
      shouldGoToHome: false
    };
  }

  handleClickTryAgain = event => {
    this.setState({ score: 100 });
  };
  handleClickRoll = event => {
    this.setState({ score: Math.floor(Math.random() * 100) });
  };

  handleClickGamblingSave = event => {
    this.setState({ shouldGoToHome: true });
  };

  render() {
    if (this.state.shouldGoToHome) {
      return <Redirect to="/" />;
    }

    return (
      <Row>
        <Col xs="9">
          <Row>
            <Col>
              <Gambling
                onClickTryAgain={this.handleClickTryAgain}
                onClickRoll={this.handleClickRoll}
                onClickSave={this.handleClickGamblingSave}
              />
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
