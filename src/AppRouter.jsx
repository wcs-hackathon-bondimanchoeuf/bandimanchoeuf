import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Game" component={Game} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
