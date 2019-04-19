import React, { Component } from "react";
import style from "./Main.module.css";
import Register from "../components/Register.jsx";
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
          />
        </div>
      </div>
    );
  }
}

export default Home;
