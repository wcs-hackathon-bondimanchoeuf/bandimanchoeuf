import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";

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
