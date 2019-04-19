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
      idEggs: [],
      displayedEggs: [0, 0, 0],
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
      this.setState({ eggs, isLoadingEggs: false }, () =>
        this.computeDisplayedEgg()
      )
    );
  };

  handleClickTryAgain = event => {
    this.setState({ score: 50 });
  };

  computeDisplayedEgg = () => {
    let maxRand = this.state.eggs.length;

    const idEggs = [];
    idEggs[0] = Math.floor(Math.random() * maxRand);
    idEggs[1] = Math.floor(Math.random() * maxRand);
    idEggs[2] = Math.floor(Math.random() * maxRand);

    this.setState({ idEggs }, () => {
      const displayedEggs = [
        this.state.eggs[idEggs[0]],
        this.state.eggs[idEggs[1]],
        this.state.eggs[idEggs[2]]
      ];
      this.setState({ displayedEggs });
    });
  };

  computeNewScore = () => {
    let currentScore = this.state.score;
    const idEggs = this.state.idEggs;

    let score = parseInt(currentScore);
    if (idEggs[0] === idEggs[1] && idEggs[1] === idEggs[2]) {
      score += 20;
    } else if (
      idEggs[0] === idEggs[1] ||
      idEggs[1] === idEggs[2] ||
      idEggs[2] === idEggs[0]
    ) {
      score += 5;
    } else {
      score--;
    }

    this.setState({ score });
  };

  handleClickRoll = event => {
    this.computeDisplayedEgg();
    this.computeNewScore();
  };

  handleClickGamblingSave = event => {
    this.setState({ shouldGoToHome: true });
  };

  render() {
    if (this.state.shouldGoToHome) {
      let redirectParams = `name=${this.state.name}&score=${this.state.score}`;
      return <Redirect to={{ pathname: "/", search: redirectParams }} />;
    }

    return (
      <div className={style.containerGame}>
        <div className={style.containerMachine}>
          <Gambling
            onClickTryAgain={this.handleClickTryAgain}
            onClickRoll={this.handleClickRoll}
            displayedEggs={this.state.displayedEggs}
            isLoadingEggs={this.state.isLoadingEggs}
            onClickSave={this.handleClickGamblingSave}
            score={this.state.score}
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
