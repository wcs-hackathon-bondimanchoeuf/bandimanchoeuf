import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import Gambling from "../components/Gambling.jsx";
import Legend from "../components/Legend.jsx";
import Score from "../components/Score.jsx";
import Events from "../components/Events.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 50,
      isLoadingEggStore: true,
      eggs: []
    };
  }

  getDataFromApi = () => {
    this.setState({ isLoadingEggStore: true });
    let getRandomEggs = [];
    for (let i = 0; i < 8; i++) {
      getRandomEggs.push(
        axios
          .get("http://easteregg.wildcodeschool.fr/api/eggs/random")
          .then(res => res.data)
      );
    }
    Promise.all(getRandomEggs).then(eggs =>
      this.setState({ eggs, isLoadingEggStore: false })
    );
  };

  handleClickTryAgain = event => {
    this.setState({ score: 100 });
  };
  handleClickRoll = event => {
    this.setState({ score: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <Row>
        <Col xs="9">
          <Row>
            <Col>
              <button onClick={this.getDataFromApi}>click</button>{" "}
              {/* button to remove, only for test */}
              <Gambling
                onClickTryAgain={this.handleClickTryAgain}
                onClickRoll={this.handleClickRoll}
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
