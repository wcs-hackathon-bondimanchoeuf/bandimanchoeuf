import React, { Component } from "react";
import style from "./Main.module.css";
import Register from "../components/Register.jsx";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import LastGame from "../components/LastGame.jsx";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastPlayer: "",
      lastScore: "",
      shouldGoToGame: false
    };
  }

  componentDidMount() {
    let URLParams = queryString.parse(this.props.location.search);
    let lastPlayer = URLParams.name;
    let lastScore = URLParams.score;
    this.setState({ lastPlayer, lastScore });
  }

  handleChangeRegisterTextInput = e => {
    this.setState({ name: e.target.value });
  };

  handleClickRegisterButton = e => {
    this.setState({ shouldGoToGame: true });
  };

  handleKeyPressRegisterTextInput = e => {
    if (e.key === "Enter") {
      this.setState({ shouldGoToGame: true });
    }
  };

  render() {
    if (this.state.shouldGoToGame) {
      let redirectParams = `name=${this.state.name}`;
      return <Redirect to={{ pathname: "/Game", search: redirectParams }} />;
    }

    return (
      <div className={style.main}>
        <div className={style.register}>
          <Register
            onChangeTextInput={this.handleChangeRegisterTextInput}
            name={this.state.name}
            onClickButton={this.handleClickRegisterButton}
            onKeyPress={this.handleKeyPressRegisterTextInput}
          />
        </div>
        <div>
          <LastGame name={this.state.lastPlayer} score={this.state.lastScore} />
        </div>
      </div>
    );
  }
}

export default Home;
