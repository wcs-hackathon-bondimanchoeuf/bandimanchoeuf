import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Register from "../components/Register.jsx";
import LastGame from "../components/LastGame.jsx";
import Ranking from "../components/Ranking.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChangeRegisterTextInput = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <Row>
        <Col xs="9">
          <Register
            onChangeTextInput={this.handleChangeRegisterTextInput}
            name={this.state.name}
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
