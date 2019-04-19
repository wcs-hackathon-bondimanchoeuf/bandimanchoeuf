import React, { Component } from "react";
import axios from "axios";
import style from "./Game.module.css";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import Gambling from "../components/Gambling.jsx";
import Legend from "../components/Legend.jsx";
import Score from "../components/Score.jsx";
import Events from "../components/Events.jsx";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: 50,
      isLoadingEggs: true,
      eggs: [],
      shouldGoToHome: false
    };
  }

  componentDidMount() {
    this.getDataFromApi();
    let URLParams = queryString.parse(this.props.location.search);
    if (!URLParams.name) {
      this.setState({ shouldGoToHome: true });
    }
    this.setState({ name: URLParams.name });
  }

  getDataFromApi = () => {
    this.setState({ isLoadingEggs: true });
    let getRandomEggs = [];
    for (let i = 0; i < 10; i++) {
      getRandomEggs.push(
        axios
          .get("http://easteregg.wildcodeschool.fr/api/eggs/random")
          .then(res => res.data)
      );
    }
    Promise.all(getRandomEggs).then(eggs =>
      this.setState({ eggs, isLoadingEggs: false })
    );
  };

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
      <div className={style.containerGame}>
        <div className={style.containerMachine}>
          <Gambling
            onClickTryAgain={this.handleClickTryAgain}
            onClickRoll={this.handleClickRoll}
            eggs={this.state.eggs}
            isLoadingEggs={this.state.isLoadingEggs}
            onClickSave={this.handleClickGamblingSave}
          />
          <Legend />
        </div>
        <div className={style.containerScore}>
          <Score score={this.state.score} name={this.state.name} />
          <Events />
        </div>
      </div>
    );
  }
}

export default Game;
