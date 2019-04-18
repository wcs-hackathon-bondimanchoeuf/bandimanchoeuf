import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Register from "../components/Register.jsx";
import LastGame from "../components/LastGame.jsx";
import Ranking from "../components/Ranking.jsx";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      shouldGoToGame: false
    };
  }

  handleChangeRegisterTextInput = e => {
    this.setState({ name: e.target.value });
  };

  handleClickRegisterButton = e => {
    this.setState({ shouldGoToGame: true });
  };

  render() {
    if (this.state.shouldGoToGame === true) {
      return <Redirect to="/Game" />;
    }

    return (
      <Row>
        <Col xs="9">
          <Register
            onChangeTextInput={this.handleChangeRegisterTextInput}
            name={this.state.name}
            onClickButton={this.handleClickRegisterButton}
          />
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
